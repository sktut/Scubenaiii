"use client"

import { useState, useEffect } from "react"
import { Heart, Shield, Lock, Moon, Sun, Sparkles, CheckCircle, CreditCard, Zap, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance
  }
}

interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  handler: (response: RazorpayResponse) => void
  prefill: {
    name: string
    email: string
  }
  theme: {
    color: string
  }
}

interface RazorpayInstance {
  open: () => void
}

interface RazorpayResponse {
  razorpay_payment_id: string
}

const donationAmounts = [100, 500, 1000, 2500, 5000, 10000]

export default function DonatePage() {
  const [isDark, setIsDark] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(500)
  const [customAmount, setCustomAmount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
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

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const handleDonate = () => {
    const amount = customAmount ? Number.parseInt(customAmount) : selectedAmount
    if (amount < 1) return

    setIsProcessing(true)

    const options: RazorpayOptions = {
      key: "rzp_live_Rp9X2zUxOXRLaQ",
      amount: amount * 100,
      currency: "INR",
      name: "ScubenAI",
      description: "Donation to ScubenAI",
      handler: (response: RazorpayResponse) => {
        console.log("Payment successful:", response.razorpay_payment_id)
        setIsProcessing(false)
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 5000)
      },
      prefill: {
        name: name,
        email: email,
      },
      theme: {
        color: "#0ea5e9",
      },
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
    setIsProcessing(false)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary transition-transform group-hover:scale-110 duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-2xl font-bold tracking-tight">ScubenAI</span>
          </div>
          <div className="flex items-center gap-3">
            <Sun className={cn("h-4 w-4 transition-opacity duration-300", isDark ? "opacity-50" : "opacity-100")} />
            <Switch checked={isDark} onCheckedChange={setIsDark} className="data-[state=checked]:bg-primary" />
            <Moon className={cn("h-4 w-4 transition-opacity duration-300", isDark ? "opacity-100" : "opacity-50")} />
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            Support Innovation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Power the Future of
            <span className="text-primary"> AI Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your generous contribution helps us build cutting-edge AI solutions that make a difference. Every donation
            fuels research, development, and community growth.
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="font-medium text-green-500">Thank you for your generous donation!</span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Donation Form */}
          <Card className="border-border/50 backdrop-blur-sm bg-card/80 animate-in fade-in slide-in-from-left-4 duration-700 delay-150">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Gift className="h-6 w-6 text-primary" />
                Make a Donation
              </CardTitle>
              <CardDescription>Choose an amount or enter a custom value to support ScubenAI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Select Amount (₹)</Label>
                <div className="grid grid-cols-3 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount("")
                      }}
                      className={cn(
                        "py-3 px-4 rounded-xl border-2 font-semibold transition-all duration-300 hover:scale-105",
                        selectedAmount === amount && !customAmount
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "border-border hover:border-primary/50 bg-card",
                      )}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="space-y-2">
                <Label htmlFor="custom-amount">Or Enter Custom Amount</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₹</span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-8 h-12 text-lg"
                  />
                </div>
              </div>

              {/* Donor Info */}
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <Button
                onClick={handleDonate}
                disabled={isProcessing || (!selectedAmount && !customAmount)}
                className="w-full h-14 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Donate ₹{(customAmount ? Number.parseInt(customAmount) || 0 : selectedAmount).toLocaleString()}
                  </div>
                )}
              </Button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                Secured by Razorpay • 256-bit SSL Encryption
              </div>
            </CardContent>
          </Card>

          {/* Payment Policy */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
            <Card className="border-border/50 backdrop-blur-sm bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Payment Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Donation Terms</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      All donations are voluntary and non-refundable unless charged erroneously.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Donations are processed securely through Razorpay payment gateway.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />A confirmation email will be
                      sent to your registered email address.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Refund Policy</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Refunds are only processed for duplicate or erroneous transactions.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Refund requests must be made within 7 days of the transaction.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Approved refunds will be processed within 5-7 business days.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Privacy & Security</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Your personal information is encrypted and securely stored.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      We do not store any payment card details on our servers.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Your data will never be shared with third parties without consent.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Why Donate */}
            <Card className="border-border/50 backdrop-blur-sm bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Why Support ScubenAI?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-muted">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Innovative Research</h4>
                    <p className="text-sm text-muted-foreground">Fund cutting-edge AI research and development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-muted">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Community Growth</h4>
                    <p className="text-sm text-muted-foreground">Help us build a thriving AI community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-muted">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Ethical AI</h4>
                    <p className="text-sm text-muted-foreground">Support responsible and ethical AI practices</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <p className="text-muted-foreground">
            Have questions about donations? Contact us at{" "}
            <a href="mailto:support@scubenai.com" className="text-primary hover:underline transition-colors">
              support@scubenai.com
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>© 2025 ScubenAI. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
