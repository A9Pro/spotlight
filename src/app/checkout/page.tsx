"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/components/context/CartContext";
import { useRouter } from "next/navigation";
import { CreditCard, Smartphone, Building2, CheckCircle, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type PaymentMethod = "card" | "transfer" | "ussd";

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Confirmation
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    // Shipping Info
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Payment Info
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate shipping info
    if (formData.fullName && formData.email && formData.phone && formData.address) {
      setStep(2);
    }
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setStep(3);
  };

  const nigerianStates = [
    "Lagos", "Abuja", "Oyo", "Kano", "Rivers", "Kaduna", "Ogun", "Anambra",
    "Enugu", "Delta", "Edo", "Kwara", "Imo", "Osun", "Plateau", "Bayelsa"
  ];

  const shipping = total > 1000000 ? 0 : 15000;
  const finalTotal = total + shipping;

  if (cart.length === 0 && step !== 3) {
    router.push("/cart");
    return null;
  }

  // Order Confirmation
  if (step === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAEBD7] via-[#FFF5E6] to-[#F8EBDD] flex items-center justify-center px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-[#C47A3A]/10 shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          </motion.div>

          <h1 className="text-4xl font-bold text-[#4A2C1D] mb-4">Order Confirmed! 🎉</h1>
          <p className="text-xl text-[#6B4B3A] mb-8">
            Thank you for your purchase, {formData.fullName}!
          </p>

          <div className="bg-[#FAEBD7]/50 rounded-2xl p-6 mb-8">
            <p className="text-[#6B4B3A] mb-2">Order Number</p>
            <p className="text-2xl font-bold text-[#4A2C1D]">
              #SPL{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>

          <div className="space-y-3 mb-8 text-left bg-white/50 rounded-xl p-6">
            <div className="flex justify-between">
              <span className="text-[#6B4B3A]">Subtotal</span>
              <span className="font-semibold">₦{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B4B3A]">Shipping</span>
              <span className="font-semibold">
                {shipping === 0 ? <span className="text-green-600">FREE</span> : `₦${shipping.toLocaleString()}`}
              </span>
            </div>
            <div className="flex justify-between pt-3 border-t border-[#C47A3A]/20">
              <span className="text-lg font-bold">Total Paid</span>
              <span className="text-lg font-bold text-[#E87400]">₦{finalTotal.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-[#6B4B3A] mb-8">
            A confirmation email has been sent to <strong>{formData.email}</strong>
            <br />
            Your order will be delivered in 3-5 business days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/collection" className="flex-1">
              <button className="w-full py-3 border-2 border-[#C47A3A]/30 text-[#4A2C1D] rounded-full font-semibold hover:border-[#E87400] transition">
                Continue Shopping
              </button>
            </Link>
            <Link href="/" className="flex-1">
              <button className="w-full py-3 bg-[#E87400] text-white rounded-full font-semibold hover:bg-[#C76200] transition">
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAEBD7] via-[#FFF5E6] to-[#F8EBDD] pt-24 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/cart">
            <button className="p-2 hover:bg-white/50 rounded-full transition">
              <ArrowLeft className="w-6 h-6 text-[#4A2C1D]" />
            </button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-[#4A2C1D]">Checkout</h1>
            <p className="text-[#6B4B3A]">Complete your purchase securely</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            {[
              { num: 1, label: "Shipping" },
              { num: 2, label: "Payment" },
              { num: 3, label: "Confirmation" }
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex items-center gap-2 ${step >= s.num ? 'text-[#E87400]' : 'text-[#C47A3A]/50'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s.num ? 'bg-[#E87400] text-white' : 'bg-white/50 text-[#C47A3A]'
                  }`}>
                    {s.num}
                  </div>
                  <span className="hidden sm:inline font-semibold">{s.label}</span>
                </div>
                {i < 2 && <div className={`w-12 h-1 mx-2 ${step > s.num ? 'bg-[#E87400]' : 'bg-[#C47A3A]/20'}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* STEP 1: Shipping Information */}
            {step === 1 && (
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleContinueToPayment}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#C47A3A]/10 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-[#4A2C1D] mb-6">Shipping Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                        placeholder="Lagos"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">State *</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                      >
                        <option value="">Select</option>
                        {nigerianStates.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">Zip Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                        placeholder="100001"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 py-4 bg-[#E87400] text-white rounded-full font-semibold text-lg hover:bg-[#C76200] transition"
                >
                  Continue to Payment
                </button>
              </motion.form>
            )}

            {/* STEP 2: Payment */}
            {step === 2 && (
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handlePlaceOrder}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#C47A3A]/10 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-[#4A2C1D] mb-6">Payment Method</h2>

                {/* Payment Method Selection */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { id: "card", label: "Card", icon: CreditCard },
                    { id: "transfer", label: "Bank Transfer", icon: Building2 },
                    { id: "ussd", label: "USSD", icon: Smartphone }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id as PaymentMethod)}
                      className={`p-4 rounded-xl border-2 transition ${
                        paymentMethod === method.id
                          ? 'border-[#E87400] bg-[#E87400]/10'
                          : 'border-[#C47A3A]/20 hover:border-[#E87400]/50'
                      }`}
                    >
                      <method.icon className="w-8 h-8 mx-auto mb-2 text-[#E87400]" />
                      <p className="font-semibold text-sm">{method.label}</p>
                    </button>
                  ))}
                </div>

                {/* Card Payment Form */}
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">Card Number *</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        maxLength={19}
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">Cardholder Name *</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">Expiry Date *</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          maxLength={5}
                          className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#4A2C1D] mb-2">CVV *</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          maxLength={3}
                          className="w-full px-4 py-3 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bank Transfer Instructions */}
                {paymentMethod === "transfer" && (
                  <div className="bg-[#FAEBD7]/50 rounded-xl p-6">
                    <p className="text-[#4A2C1D] font-semibold mb-4">Transfer to:</p>
                    <div className="space-y-2">
                      <p><strong>Bank:</strong> GTBank</p>
                      <p><strong>Account Name:</strong> Spotlight Jewelries Ltd</p>
                      <p><strong>Account Number:</strong> 0123456789</p>
                      <p className="text-sm text-[#6B4B3A] mt-4">
                        Please use your order number as reference
                      </p>
                    </div>
                  </div>
                )}

                {/* USSD Instructions */}
                {paymentMethod === "ussd" && (
                  <div className="bg-[#FAEBD7]/50 rounded-xl p-6">
                    <p className="text-[#4A2C1D] font-semibold mb-4">Dial:</p>
                    <p className="text-3xl font-bold text-[#E87400] mb-4">*737*50*Amount#</p>
                    <p className="text-sm text-[#6B4B3A]">
                      Follow the prompts to complete your payment
                    </p>
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border-2 border-[#C47A3A]/30 text-[#4A2C1D] rounded-full font-semibold hover:border-[#E87400] transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 py-4 bg-[#E87400] text-white rounded-full font-semibold hover:bg-[#C76200] transition flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        Place Order
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#C47A3A]/10 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-[#4A2C1D] mb-4">Order Summary</h3>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-[#4A2C1D] line-clamp-1">{item.name}</p>
                      <p className="text-sm text-[#6B4B3A]">Qty: {item.quantity}</p>
                      <p className="text-sm font-bold text-[#E87400]">₦{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="space-y-3 pt-4 border-t border-[#C47A3A]/20">
                <div className="flex justify-between text-[#6B4B3A]">
                  <span>Subtotal</span>
                  <span className="font-semibold">₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#6B4B3A]">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? <span className="text-green-600">FREE</span> : `₦${shipping.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-xl font-bold text-[#4A2C1D] pt-3 border-t border-[#C47A3A]/20">
                  <span>Total</span>
                  <span>₦{finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}