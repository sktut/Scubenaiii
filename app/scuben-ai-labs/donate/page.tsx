"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    Razorpay: new (options: any) => any
  }
}

export default function DonateIntegrated() {
  const [amount, setAmount] = useState(500)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleDonate = () => {
    if (amount < 1) return
    setIsProcessing(true)

    const options = {
      key: "rzp_live_Rp9X2zUxOXRLaQ",
      amount: amount * 100,
      currency: "INR",
      name: "ScubenAI Labs",
      description: "Donation to ScubenAI Labs",
      handler: (response: any) => {
        console.log("Payment successful:", response.razorpay_payment_id)
        setIsProcessing(false)
        alert("Thank you for your donation!")
      },
      prefill: { name, email },
      theme: { color: "#0ea5e9" },
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
    setIsProcessing(false)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-background text-foreground">
      <div className="w-full max-w-2xl bg-card border border-border rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Donate to Scuben AI Labs</h2>
        <p className="text-sm text-muted-foreground mb-6">Support our research and community initiatives.</p>

        <div className="mb-4">
          <label className="block text-sm mb-1">Amount (INR)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full p-3 rounded-md bg-input border border-border" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 rounded-md bg-input border border-border" />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 rounded-md bg-input border border-border" />
        </div>

        <div className="flex gap-4">
          <Button onClick={handleDonate} disabled={isProcessing} className="w-full">
            {isProcessing ? "Processing..." : `Donate ₹${amount.toLocaleString()}`}
          </Button>
          <Button onClick={() => (window.location.href = "/donate")} variant="outline">
            Site Donate
          </Button>
        </div>
      </div>
    </div>
  )
}
