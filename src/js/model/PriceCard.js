export const cards = [
  {
    title: "Basic",
    priceMonthly: "19.99",
    priceAnnual: "199.99",
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    featured: false
  },
  {
    title: "Professional",
    priceMonthly: "24.99",
    priceAnnual: "249.99",
    features: ["1 T Storage", "5 Users Allowed", "Send up to 10 GB"],
    featured: true
  },
  {
    title: "Master",
    priceMonthly: "39.99",
    priceAnnual: "399.99",
    features: ["2 T Storage", "10 Users Allowed", "Send up to 20 GB"],
    featured: false
  }
];

export default class PriceCard {
  constructor() {
    this.title = null;
    this.monthPrice = null;
    this.yearPrice = null;
    this.features = [];
  }
}
