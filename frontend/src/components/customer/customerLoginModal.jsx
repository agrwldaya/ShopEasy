"use client"

import { useState } from "react";
import { User } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OtpVerificationModal } from "./otp-verification-modal";

export function CustomerLoginModal({ isOpen, onClose }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const validatePhoneNumber = () => {
    if (!phoneNumber) {
      setError("Phone number is required");
      return false;
    } else if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      setError("Please enter a valid 10-digit Indian phone number");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePhoneNumber()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowOtpModal(true);
      }, 1500);
    }
  };

  const handleOtpVerificationClose = () => {
    setShowOtpModal(false);
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen && !showOtpModal} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                <User className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <DialogTitle className="text-center text-xl">Customer Login</DialogTitle>
            <DialogDescription className="text-center">Enter your phone number to receive an OTP</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="customerPhone">Phone Number</Label>
              <Input
                id="customerPhone"
                type="tel"
                placeholder="Enter your 10-digit phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={error ? "border-red-500" : ""}
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>

            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isLoading}>
              {isLoading ? "Sending OTP..." : "Get OTP"}
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account?</span>{" "}
              <Button variant="link" className="p-0 h-auto text-orange-600">
                Register as Customer
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {showOtpModal && (
        <OtpVerificationModal isOpen={showOtpModal} onClose={handleOtpVerificationClose} phoneNumber={phoneNumber} />
      )}
    </>
  );
}