import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

import { ToastContainer, toast } from "react-toastify";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "Storage & Warehousing",
  origin: "",
  destination: "",
  cargo: "",
  message: "",
};

const fields = [
  {
    name: "name",
    label: "Full name",
    placeholder: "Your name",
    required: true,
  },
  {
    name: "company",
    label: "Company name",
    placeholder: "Your company",
    required: false,
  },
  {
    name: "email",
    label: "Email address",
    placeholder: "you@company.com",
    required: true,
    type: "email",
  },
  {
    name: "phone",
    label: "Phone number",
    placeholder: "+91",
    required: false,
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const update = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      // NOTE: Yahan apna actual email address use karein
      const response = await fetch(
        "https://formsubmit.co/ajax/sr614430@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const result = await response.json();

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Failed to send");
      }

      toast("Enquiry successfully send");

      setForm(initialForm);
    } catch {
      toast("Enquiry send unsuccessful");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section-wrap py-20 sm:py-24 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
            <span className="h-px w-7 bg-emerald-700" /> Contact SCL
          </span>
          <h2 className="section-title mt-3 text-3xl font-extrabold sm:text-4xl">
            Let’s talk <span className="text-emerald-700">logistics.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted">
            Have a shipment to arrange or a storage requirement to discuss?
            Share a few details and start a conversation with our team.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-forest">
                <Mail size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted">Email</p>
                <p className="mt-1 text-sm font-bold">sr614430@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-forest">
                <Phone size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted">Phone</p>
                <p className="mt-1 text-sm font-bold">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-forest">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted">
                  Office address
                </p>
                <p className="mt-1 text-sm font-bold">
                  Registered Office Address
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-forest">
                <Clock size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted">
                  Business hours
                </p>
                <p className="mt-1 text-sm font-bold">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-forest/8 bg-white p-5 shadow-soft sm:p-8 lg:p-9"
        >
          <div className="mb-7">
            <h3 className="font-display text-2xl font-extrabold">
              Request a quote
            </h3>
            <p className="mt-2 text-sm text-muted">
              Fields marked <span className="text-emerald-700">*</span> are
              required.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map(({ name, label, placeholder, required, type }) => (
              <label key={name} className="block">
                <span className="mb-2 block text-xs font-bold">
                  {label}
                  {required && <span className="text-emerald-700"> *</span>}
                </span>
                <input
                  name={name}
                  type={type || "text"}
                  placeholder={placeholder}
                  value={form[name]}
                  onChange={update}
                  required={required}
                  className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none transition placeholder:text-muted/60 focus:border-forest focus:ring-2 focus:ring-emerald-700/10"
                />
              </label>
            ))}

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs font-bold">
                Service required <span className="text-emerald-700">*</span>
              </span>
              <select
                name="service"
                value={form.service}
                onChange={update}
                required
                className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-forest"
              >
                <option>Storage & Warehousing</option>
                <option>Temperature-Controlled Storage (−20°C)</option>
                <option>Logistics & Transportation</option>
                <option>Distribution</option>
                <option>Other / Not sure yet</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold">
                Shipment origin
              </span>
              <input
                name="origin"
                placeholder="Pickup city / location"
                value={form.origin}
                onChange={update}
                className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-forest"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold">
                Shipment destination
              </span>
              <input
                name="destination"
                placeholder="Delivery city / location"
                value={form.destination}
                onChange={update}
                className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-forest"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs font-bold">
                Cargo / storage details
              </span>
              <input
                name="cargo"
                placeholder="Product type, quantity, temperature needs…"
                value={form.cargo}
                onChange={update}
                className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-forest"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs font-bold">Message</span>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us more about your requirements…"
                value={form.message}
                onChange={update}
                className="w-full resize-y rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-forest"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="primary-btn mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-forest px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mint hover:text-black disabled:opacity-60 sm:w-auto"
          >
            {sending ? (
              <>
                Sending... <Loader2 size={16} className="animate-spin" />
              </>
            ) : (
              <>
                Send enquiry <Send size={16} />
              </>
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
}
