export type BmiResult = {
  bmi: number;
  category: string;
  categoryNote: string;
  healthyMin: number;
  healthyMax: number;
};

export function calculateBmi(heightCm: number, weightKg: number): BmiResult {
  const heightM = heightCm / 100;
  const bmi = Math.round((weightKg / (heightM * heightM)) * 10) / 10;

  let category: string;
  let categoryNote: string;
  if (bmi < 18.5) {
    category = "Underweight";
    categoryNote = "Add lean muscle with structured strength training.";
  } else if (bmi < 25) {
    category = "Normal";
    categoryNote = "You're in the healthy range — keep it up.";
  } else if (bmi < 30) {
    category = "Overweight";
    categoryNote = "Strength training + guided nutrition can help.";
  } else {
    category = "Obese";
    categoryNote = "Our coaches can build a safe plan to help you progress.";
  }

  const healthyMin = Math.round(18.5 * heightM * heightM * 10) / 10;
  const healthyMax = Math.round(24.9 * heightM * heightM * 10) / 10;

  return { bmi, category, categoryNote, healthyMin, healthyMax };
}
