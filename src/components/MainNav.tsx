"use client";

import React from "react";
import Category from "./main-nav/Category";
import OrderDetails from "./main-nav/OrderDetails";
import ContactPhone from "./main-nav/ContactPhone";

export default function MainNav() {
  return (
    <div className="py-2 bg-white/70 border-b border-slate-100">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* left area */}
            <Category />
            <OrderDetails />
          </div>
          {/* right area */}
          <ContactPhone />
        </div>
      </div>
    </div>
  );
}
