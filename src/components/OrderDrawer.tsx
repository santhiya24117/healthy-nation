import React, { useState } from 'react';
import { X, Plus, Minus, ArrowRight, ShoppingBag, MapPin, Phone } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/menuData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export default function OrderDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart
}: Props) {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? (subtotal >= 499 ? 0 : 39) : 0;
  const total = subtotal + deliveryFee;

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let message = `*NEW ORDER — HEALTHY NATION (J.P. NAGAR)*\n`;
    message += `Type: ${orderType.toUpperCase()}\n`;
    if (customerName) message += `Name: ${customerName}\n`;
    if (customerPhone) message += `Phone: ${customerPhone}\n`;
    if (orderType === 'delivery' && customerAddress) {
      message += `Address: ${customerAddress}\n`;
    }
    message += `\n*ITEMS:*\n`;
    cart.forEach((c) => {
      message += `• ${c.quantity}x ${c.item.name} — ₹${c.item.price * c.quantity}\n`;
    });
    message += `\nSubtotal: ₹${subtotal}\n`;
    if (orderType === 'delivery') {
      message += `Delivery: ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}\n`;
    }
    message += `*Total: ₹${total}*\n`;
    if (notes) message += `Notes: ${notes}\n`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.cleanPhone}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1C18]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#FFFFFF] text-[#1C1C18] shadow-xl border-l border-[#E2DED4]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E2DED4] px-6 py-5 bg-[#F7F4EC]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-[#66734F]" />
            <div>
              <h2 className="text-base font-bold text-[#1C1C18]">Your Order Tray</h2>
              <p className="text-xs text-[#6F7068]">
                {cart.reduce((sum, i) => sum + i.quantity, 0)} items selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#E2DED4] transition-colors cursor-pointer"
            aria-label="Close order drawer"
          >
            <X className="h-5 w-5 text-[#1C1C18]" />
          </button>
        </div>

        {orderSent ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center bg-[#F7F4EC]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#66734F] text-white mb-4">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#1C1C18]">Order Forwarded</h3>
            <p className="mt-2 text-sm text-[#6F7068] max-w-xs">
              Your order has been sent to our J.P. Nagar team. We are preparing your fresh meal with clean ingredients.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 w-full max-w-xs">
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 border border-[#1C1C18] rounded-[8px] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#1C1C18] hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Restaurant {RESTAURANT_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setOrderSent(false);
                  onClearCart();
                  onClose();
                }}
                className="text-xs text-[#6F7068] hover:text-[#1C1C18] underline mt-2 cursor-pointer"
              >
                Start New Order
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center text-[#6F7068]">
                  <p className="text-xl font-bold text-[#1C1C18]">Your tray is empty.</p>
                  <p className="mt-1.5 text-xs max-w-xs text-[#6F7068]">
                    Explore bowls, wraps, overnight oats, or fresh juices from our menu.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 divide-y divide-[#E2DED4]">
                  {cart.map(({ item, quantity }) => (
                    <div key={item.id} className="pt-3 first:pt-0 flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full shrink-0 ${
                              item.type === 'Veg' ? 'bg-emerald-600' : 'bg-[#C85C3A]'
                            }`}
                            title={item.type}
                          />
                          <h4 className="text-sm font-semibold text-[#1C1C18]">{item.name}</h4>
                        </div>
                        <p className="text-xs text-[#6F7068] mt-0.5 line-clamp-1">{item.description}</p>
                        <span className="text-xs font-semibold text-[#C85C3A] mt-1 inline-block">
                          ₹{item.price * quantity}
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#E2DED4] rounded-[6px] bg-[#FFFFFF]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2 py-1 text-xs hover:bg-[#F7F4EC] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-2 text-xs font-semibold">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2 py-1 text-xs hover:bg-[#F7F4EC] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Order Options */}
              {cart.length > 0 && (
                <div className="mt-6 border-t border-[#E2DED4] pt-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="uppercase tracking-wider text-[#6F7068]">Order Type</span>
                    <div className="flex rounded-[8px] border border-[#E2DED4] p-0.5 bg-[#F7F4EC]">
                      <button
                        onClick={() => setOrderType('delivery')}
                        className={`px-3 py-1 text-xs rounded-[6px] font-medium transition-colors cursor-pointer ${
                          orderType === 'delivery' ? 'bg-[#1C1C18] text-white' : 'text-[#1C1C18]'
                        }`}
                      >
                        Delivery
                      </button>
                      <button
                        onClick={() => setOrderType('pickup')}
                        className={`px-3 py-1 text-xs rounded-[6px] font-medium transition-colors cursor-pointer ${
                          orderType === 'pickup' ? 'bg-[#1C1C18] text-white' : 'text-[#1C1C18]'
                        }`}
                      >
                        Takeaway
                      </button>
                    </div>
                  </div>

                  {orderType === 'pickup' && (
                    <div className="flex items-start gap-2 bg-[#F7F4EC] p-3 rounded-[8px] text-xs text-[#1C1C18] border border-[#E2DED4]">
                      <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#66734F]" />
                      <div>
                        <p className="font-semibold">Healthy Nation Pickup Counter</p>
                        <p className="text-[11px] text-[#6F7068] mt-0.5">{RESTAURANT_INFO.address}</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your Name (Optional)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full border border-[#E2DED4] rounded-[8px] bg-white px-3 py-2 text-xs text-[#1C1C18] focus:outline-none focus:border-[#66734F]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number for Order Confirmation"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full border border-[#E2DED4] rounded-[8px] bg-white px-3 py-2 text-xs text-[#1C1C18] focus:outline-none focus:border-[#66734F]"
                    />
                    {orderType === 'delivery' && (
                      <textarea
                        placeholder="Delivery Address in J.P. Nagar or nearby"
                        rows={2}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full border border-[#E2DED4] rounded-[8px] bg-white px-3 py-2 text-xs text-[#1C1C18] focus:outline-none focus:border-[#66734F]"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && (
              <div className="border-t border-[#E2DED4] bg-[#F7F4EC] p-6 space-y-3">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-[#6F7068]">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#1C1C18]">₹{subtotal}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-[#6F7068]">
                      <span>Delivery</span>
                      <span className="font-semibold text-[#1C1C18]">
                        {deliveryFee === 0 ? 'FREE (Orders > ₹499)' : `₹${deliveryFee}`}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-bold pt-2 border-t border-[#E2DED4]">
                    <span>Total</span>
                    <span className="text-[#C85C3A]">₹{total}</span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 bg-[#1C1C18] py-3 text-sm font-semibold rounded-[8px] text-white hover:bg-[#66734F] transition-colors cursor-pointer"
                >
                  <span>Confirm Order via WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-center text-[11px] text-[#6F7068]">
                  Or call restaurant directly: <span className="font-semibold text-[#1C1C18]">{RESTAURANT_INFO.phone}</span>
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
