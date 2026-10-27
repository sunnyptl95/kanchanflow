import { FileText, Boxes, Workflow, MessageCircle, BarChart3, Smartphone } from "lucide-react";

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/#industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export const features = [
  { icon: FileText, title: "Quote to order", text: "Build a quote from your item master, send it as a PDF, and convert it to a sales order in one click when the customer says yes." },
  { icon: Boxes, title: "BOM and costing", text: "Multi-level bills of material with material, labour and machine cost, so the price on the quote is the price you can actually make." },
  { icon: Workflow, title: "Shop-floor pipeline", text: "Every enquiry, quote and work order sits on one board. See what is waiting for approval and what is stuck at the lathe." },
  { icon: MessageCircle, title: "WhatsApp built in", text: "Send quotes, order confirmations and dispatch updates on WhatsApp. Customer replies land on the order, not in someone's phone." },
  { icon: BarChart3, title: "Reports that match the shop", text: "Quote win rate, on-time delivery, pending orders by customer and margin by job, without exporting to a spreadsheet first." },
  { icon: Smartphone, title: "Mobile app", text: "Supervisors close work orders and sales staff raise quotes from the floor or a customer site. Works offline, syncs when back online." },
];

export const industries = [
  "CNC machining", "Sheet-metal fabrication", "Injection moulding", "Foundry and casting",
  "Fasteners and fittings", "Packaging machinery", "Electrical panels",
];

export const homeFaqs = [
  { q: "Do we have to replace our accounting software?", a: "No. KanchanFlow handles quotes, orders and production. Invoices and payments can be exported to Tally or Excel, so your accountant keeps working as before." },
  { q: "How does the WhatsApp feature work?", a: "You connect your business WhatsApp number once. After that you send quotes, order confirmations and dispatch updates from the order screen, and customer replies are attached to the same order." },
  { q: "Will it work with poor connectivity on the shop floor?", a: "Yes. The mobile app keeps today's work orders on the phone, lets staff update them offline, and syncs the changes when the connection returns." },
  { q: "How long does setup take?", a: "Most shops import customers and items from Excel and send their first quote within a day. We help with the import on every paid plan." },
  { q: "Can we try it before paying?", a: "Every plan has a 14-day free trial with no card required. You can invite your whole team during the trial." },
];

export const pricingFaqs = [
  { q: "What counts as a user?", a: "Anyone who logs in to create or update records. Customers who only receive quotes or WhatsApp updates are free and unlimited." },
  { q: "Can I change plans later?", a: "Yes. Upgrade or downgrade at any time. The change applies from your next billing date and nothing is lost." },
  { q: "Is there a setup fee?", a: "No. Starter and Growth are self-serve. Scale includes a guided onboarding and data import at no extra cost." },
  { q: "How much do I save with annual billing?", a: "Annual billing is 20% cheaper than paying monthly, and is billed once per year." },
  { q: "Do prices include GST?", a: "Prices are shown before GST. The tax is added at checkout and appears on your invoice." },
];

export const plans = [
  { name: "Starter", monthly: 1999, annual: 1599, users: "Up to 3 users", blurb: "For small workshops moving off Excel.", items: ["Quotes and sales orders", "Basic bill of material", "Pipeline board", "Email support"], cta: "Start free trial", featured: false },
  { name: "Growth", monthly: 4999, annual: 3999, users: "Up to 15 users", blurb: "For shops running several jobs a day.", items: ["Everything in Starter", "Work orders and costing", "WhatsApp messaging", "Reports and mobile app"], cta: "Start free trial", featured: true },
  { name: "Scale", monthly: null, annual: null, users: "Unlimited users", blurb: "For multi-plant manufacturers.", items: ["Everything in Growth", "Multiple plants and warehouses", "API access", "Guided onboarding"], cta: "Talk to sales", featured: false },
];

export const compareRows = [
  { need: "Send a priced quote", old: "Rebuild it in Excel, export, attach to email", now: "Generate from the item master, send as PDF or WhatsApp" },
  { need: "Know the true cost of a job", old: "Check three sheets and ask the estimator", now: "Costing is calculated from the BOM" },
  { need: "Track an order's status", old: "Phone the supervisor", now: "Open the pipeline board" },
  { need: "Find what a customer approved", old: "Scroll back through chat history", now: "Replies are attached to the order" },
  { need: "See which quotes are going cold", old: "Not tracked", now: "Follow-up reminders and win-rate report" },
];

export const featureRows = [
  { title: "Quotes your customers can approve from their phone", text: "Pick items, set quantities and the price follows from your BOM and margin rules. The customer gets a clean PDF with an approve button, and approval creates the sales order.", points: ["Reusable item and rate master", "Quote versions with a change log", "Approve on WhatsApp or by link"], screen: "Quote Q-1042", rows: ["Hydraulic manifold block, 120 pcs", "Flange adaptor, 400 pcs", "Surface treatment, lot"] },
  { title: "BOM and costing that finance trusts", text: "Build multi-level BOMs once. Material, machine hours and labour roll up into one cost, and every quote shows its margin before you send it.", points: ["Multi-level bill of material", "Scrap and wastage allowances", "Margin warning below your floor"], screen: "BOM for MB-220", rows: ["EN8 round bar, 38 mm", "CNC turning, 14 min", "Deburr and wash, 3 min"] },
  { title: "One board from enquiry to dispatch", text: "Drag a job from Quoted to In production to Dispatched. Each stage shows who owns it and how long it has been there.", points: ["Stage ageing and owner", "Work order per approved quote", "Delay alerts to the sales owner"], screen: "Pipeline", rows: ["Enquiry: 9 open", "In production: 6 jobs", "Ready to dispatch: 3"] },
  { title: "WhatsApp and mobile for people who are never at a desk", text: "Updates go out from the order screen and replies come back to it. The mobile app lets supervisors close operations on the floor, even offline.", points: ["Templates for quote, order, dispatch", "Offline work-order updates", "Photo attachments from the floor"], screen: "Order SO-3188", rows: ["Confirmation sent 10:12", "Customer replied: approved", "Dispatch update queued"] },
];
