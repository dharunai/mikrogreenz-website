export type MicrogreenDetail = {
  benefits: string[];
  vitamins: string[];
  minerals: string[];
  keyCompounds: { name: string; description: string }[];
  advantages: string[];
  consumption: {
    amount: string;
    waysToUse: string[];
  };
};

export const microgreensData: Record<string, MicrogreenDetail> = {
  "Sunflower Microgreens": {
    benefits: [
      "Heart Health: Lowers Cholesterol, Regulates BP",
      "Immune Support: Boost Defenses",
      "Digestive Aid: Fiber, Enzymes for Gut Health",
      "Anti-Inflammatory: Antioxidants, Chlorophyll",
      "Bone Health: Magnesium Rich"
    ],
    vitamins: ["Vit E (>100% RDA)", "Vit A (Vision)", "B-Complex (Energy)", "Vit K (Clotting, Bones)"],
    minerals: ["Iron (O2 Transport)", "Magnesium", "Calcium", "Copper", "Selenium"],
    keyCompounds: [
      { name: "Protein Power", description: "Up to 4x More Protein than Mature Sunflower Protein" }
    ],
    advantages: ["Alkalizing, Balanced Nutrition", "Concentrated Antioxidants", "Supports Muscle Repair & Energy"],
    consumption: {
      amount: "20-50g (small handful daily for general health)",
      waysToUse: ["Salads & Smoothies", "Juices, Smoothie Bowls", "Garnish for Soups & Meals"]
    }
  },
  "Beetroot Microgreens": {
    benefits: [
      "Heart Health: Lowers Blood Pressure, Improves Circulation",
      "Stamina Boost: Nitric Oxide for Energy",
      "Liver Support for Detoxification",
      "Anti-Inflammatory: Antioxidants Reduce Stress",
      "Eye Health: Lutein & Zeaxanthin Protection"
    ],
    vitamins: ["Vit C (>30% RDA)", "Vit K (Clotting)", "Vit A (Vision)", "Folate (B9 - Energy/DNA)"],
    minerals: ["Iron (O2 Transport)", "Magnesium", "Potassium (BP Reg.)", "Manganese", "Copper"],
    keyCompounds: [
      { name: "Nitrates > Nitric Oxide", description: "Relaxes Blood Vessels, Boosts Endurance" },
      { name: "Betalains (Red Pigments)", description: "Potent Antioxidant, Anti-inflammatory, Supports Detox Pathways" }
    ],
    advantages: ["Stamina & Endurance", "Cardiovascular Support", "Detoxification"],
    consumption: {
      amount: "Introduce gradually to assess tolerance",
      waysToUse: ["Salads & Sandwiches", "Smoothies", "Garnish for Dishes"]
    }
  },
  "Radish Microgreens": {
    benefits: [
      "Detox Aid: Detoxifying Enzymes, Sulforaphane",
      "Immune Support: Boost Defenses, Vit C",
      "Digestive Support: Prebiotic Fiber, Enzymes for Gut Health",
      "Heart Health: Lowers Cholesterol, Regulates BP",
      "Anti-Inflammatory: Rich in Antioxidants"
    ],
    vitamins: ["Vit C (Up to 120% RDA)", "Vit A (Vision)", "B-Complex (Energy)", "Vit K (Clotting, Bones)"],
    minerals: ["Potassium", "Iron (Up to 16% RDA)", "Calcium", "Magnesium", "Phosphorus"],
    keyCompounds: [
      { name: "Glucosinolates", description: "Contains Sulforaphane (Anti-Cancer Compound)" },
      { name: "Detox Power", description: "Antibacterial & Antifungal, Detoxifying & Balancing" }
    ],
    advantages: ["Potent Detoxifiers", "Rich in Antioxidants", "Anti-Cancer Properties", "Boosts Immunity"],
    consumption: {
      amount: "20-50g (small handful daily for general health)",
      waysToUse: ["Salads & Sandwiches", "Wraps, Omelettes", "Top Dishes & Avocado Toast", "Garnish Stir-Fries & Sushi"]
    }
  },
  "Methi Microgreens": {
    benefits: [
      "Blood Sugar Regulation: Digestive Aid",
      "Heart Health: Maintain Blood Pressure",
      "Iron Rich: Support Blood Stream",
      "Hormone Balance",
      "Anti-Inflammatory properties"
    ],
    vitamins: ["A+B-Complex (Energy)", "Vit C (Immunity)", "Vit K (Clotting, Bones)", "Antioxidants"],
    minerals: ["Iron (30% RDA)", "Magnesium", "Calcium", "Zinc & Phosphorus"],
    keyCompounds: [
      { name: "Diosgenin & Saponins", description: "Hormonal Health, Cholesterol Regulation, Antidiabetic" },
      { name: "Alkaloids", description: "Anti-Inflammatory, Detoxifying" }
    ],
    advantages: ["Detoxifying & Cleansing", "Blood Sugar Management"],
    consumption: {
      amount: "20-50g (small handful daily for general health)",
      waysToUse: ["Salads & Dals", "Wraps & Sprouts", "Garnish Curries & Indian Dishes", "Protein Sandwiches"]
    }
  },
  "Mustard Microgreens": {
    benefits: [
      "Detox & Digestive Support: Detox Enzymes, Fiber",
      "Anti-Cancer Properties: Sulforaphane, Antioxidants",
      "Immune Support: Boost Defenses, Vit C, Antioxidants",
      "Heart Health: Lowers Cholesterol, BP",
      "Anti-Inflammatory: Combat Inflammation"
    ],
    vitamins: ["Vit C (130% RDA)", "Vit A (Vision)", "B-Complex (Energy & Mood)", "Vit K (Clotting, Bones)", "Vit E (Antioxidant)"],
    minerals: ["Iron (8% RDA)", "Calcium", "Potassium", "Magnesium", "Phosphorus"],
    keyCompounds: [
      { name: "Sulforaphane Rich", description: "Potent Anti-Cancer Compound, Detoxifying & Liver Support, Antibacterial & Antifungal" }
    ],
    advantages: ["Detoxifying & Digestive Support", "Potent Antioxidants", "Anti-Cancer Properties", "Supports Immunity Boost"],
    consumption: {
      amount: "20-50g (small handful daily for general health)",
      waysToUse: ["Salads & Sandwiches", "Wraps, Spring Rolls", "Garnish Stir-Fries", "Blend into Green Smoothies"]
    }
  },
  "Wheatgrass": {
    benefits: [
      "Detox & Digestive Support: Detox Enzymes, Alkalizer the Body",
      "Natural Energy Booster: Boosts Energy, Enhances Vitality",
      "Anti-Cancer Properties: Detoxifying/Anti-Cancer Sulforaphane",
      "Immune Support: Boosts Defenses, Antioxidants",
      "Antioxidant-Rich: Combats Free Radicals"
    ],
    vitamins: ["Vit C, E, A (Beta-Carotene)", "B Complex", "Enzymes: Chlorophyllase, Cytochrome Oxidase"],
    minerals: ["Iron", "Calcium", "Magnesium", "Potassium", "Zinc", "Manganese", "Selenium"],
    keyCompounds: [
      { name: "Chlorophyll Rich", description: "Contains Chlorophyll (Potent Detoxifier), Improves Blood Quality & Oxygenates the Body" }
    ],
    advantages: ["Detoxifying & Digestive Support", "Natural Alkalizer", "Energy & Vitality Support", "Potent Antioxidants"],
    consumption: {
      amount: "30-60ml (1-2oz) Fresh Juice, 1-2 times daily",
      waysToUse: ["Juices & Smoothies", "Salad Boosters", "Straight Shot/or Juicing"]
    }
  },
  "Broccoli Microgreens": {
    benefits: [
      "Cancer Protection: Blood Pressures & Antioxidants",
      "Detox Support Enhances Challenged Liver Enzymes",
      "Heart Health: Cholesterol & BP",
      "Brain Health: Anti-inflammatory Effects",
      "Eye Health: Zeaxanthin Protection"
    ],
    vitamins: ["Vit C (155% RDA)", "Vit K (Clotting)", "Vit A & E (Vision)", "B-Complex (Energy/DNA)"],
    minerals: ["Iron (Transport)", "Magnesium (BP Reg.)", "Zinc", "Selenium", "Copper"],
    keyCompounds: [
      { name: "Sulforaphane", description: "Potent Detoxifier, Anti-inflammatory, Anti-Cancer" },
      { name: "Glucosinolates", description: "Potent Antioxidant, Support Detox Pathways" }
    ],
    advantages: ["Superstar for Detox", "Anti-Inflammatory Focus", "Overall Vitality"],
    consumption: {
      amount: "20-50g (small handful daily)",
      waysToUse: ["Salads", "Smoothies", "Sandwiches", "Soups"]
    }
  }
};
