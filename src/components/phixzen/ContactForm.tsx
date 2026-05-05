import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  product: z.string().min(1, "Please select a product"),
  quantity: z.coerce.number().int().min(1, "Quantity must be at least 1").max(999),
  message: z.string().trim().max(1000).optional(),
});

export function ContactForm() {
  const [product, setProduct] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      product,
      quantity: String(fd.get("quantity") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thanks! Your inquiry has been received. We'll be in touch shortly.");
    (e.currentTarget as HTMLFormElement).reset();
    setProduct("");
  }

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Order Inquiry</span>
            <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
              Order your everyday zen.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Share a few details and our team will reach out with availability,
              pricing and delivery options.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary-glow" />
                <span><span className="text-foreground/60">Email </span> info@phixzen.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-primary-glow" />
                <span><span className="text-foreground/60">Phone </span> +92 347 7450917</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary-glow" />
                <span><span className="text-foreground/60">Location </span> Islamabad, Pakistan</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="glass space-y-5 rounded-3xl p-7 md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required maxLength={100} placeholder="Your full name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@email.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" required maxLength={30} placeholder="+92 ..." className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min={1}
                    max={999}
                    defaultValue={1}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="product">Product</Label>
                <Select value={product} onValueChange={setProduct}>
                  <SelectTrigger id="product" className="mt-2">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aqua-clear">Aqua-Clear Anti Fog Spray</SelectItem>
                    <SelectItem value="anti-wrinkle">Anti Wrinkle Spray</SelectItem>
                    <SelectItem value="both">Both Products</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  maxLength={1000}
                  rows={4}
                  placeholder="Anything we should know..."
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-primary py-6 text-primary-foreground hover:bg-primary/90"
              >
                {submitting ? "Sending..." : "Submit Order Inquiry"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
