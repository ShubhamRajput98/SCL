import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";

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
  { name: "phone", label: "Phone number", placeholder: "+91", required: false },
];
export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`SCL website enquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nOrigin: ${form.origin}\nDestination: ${form.destination}\nCargo details: ${form.cargo}\nMessage: ${form.message}`,
    );
    // Replace the placeholder with SCL's official email before publishing.
    window.location.href = `mailto:sr614430@gamil.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  return (
    <section id="contact" className="section-wrap py-20 sm:py-24 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow">
            <span className="h-px w-7 bg-emerald-700" /> Contact SCL
          </span>
          <h2 className="section-title">
            Let’s talk <span className="text-emerald-700">logistics.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted">
            Have a shipment to arrange or a storage requirement to discuss?
            Share a few details and start a conversation with our team.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex gap-4 rounded-2xl bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-emerald-800">
                <Mail size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted">Email</p>
                <p className="mt-1 text-sm font-bold">
                  Add official business email
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-emerald-800">
                <Phone size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted">Phone</p>
                <p className="mt-1 text-sm font-bold">
                  Add official business phone
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-emerald-800">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted">
                  Office address
                </p>
                <p className="mt-1 text-sm font-bold">
                  Add registered office address
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-emerald-800">
                <Clock size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted">
                  Business hours
                </p>
                <p className="mt-1 text-sm font-bold">Add operating hours</p>
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
              Fields marked * are required.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map(({ name, label, placeholder, required, type }) => (
              <label key={name} className="block">
                <span className="mb-2 block text-xs font-bold">
                  {label}
                  {required && " *"}
                </span>
                <input
                  name={name}
                  type={type || "text"}
                  placeholder={placeholder}
                  value={form[name]}
                  onChange={update}
                  required={required}
                  className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none transition placeholder:text-muted/60 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs font-bold">
                Service required *
              </span>
              <select
                name="service"
                value={form.service}
                onChange={update}
                required
                className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-emerald-700"
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
                className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-emerald-700"
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
                className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-emerald-700"
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
                className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-emerald-700"
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
                className="w-full resize-y rounded-xl border border-forest/10 bg-paper px-4 py-3.5 text-sm outline-none focus:border-emerald-700"
              />
            </label>
          </div>
          <button type="submit" className="primary-btn mt-6 w-full sm:w-auto">
            Send enquiry <Send size={16} />
          </button>
          {submitted && (
            <p
              role="status"
              className="mt-4 flex items-start gap-2 text-xs leading-5 text-emerald-800"
            >
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" /> Your email
              app should open with the enquiry drafted. Replace the placeholder
              email in Contact.jsx with SCL’s official email before publishing.
            </p>
          )}
          <p className="mt-4 text-xs leading-5 text-muted">
            This demo opens the visitor’s email application. To save enquiries
            directly, connect the form to a backend or form service.
          </p>
        </form>
      </div>
    </section>
  );
}
