const db = {
  loans: [
    {
      name: "test-loan-1",
      creditScore: 725,
      rate: 6.3,
    },
    {
      name: "test-loan-2",
      creditScore: 725,
      rate: 5.8,
    },
    {
      name: "test-loan-3",
      creditScore: 800,
      rate: 3.52,
    },
    {
      name: "test-loan-4",
      creditScore: 790,
      rate: 3.5,
    },
    {
      name: "test-loan-5",
      creditScore: 810,
      rate: 1.75,
    },
    {
      name: "test-loan-6",
      creditScore: 630,
      rate: 8.8,
    },
    {
      name: "test-loan-7",
      creditScore: 725,
      rate: 4.3,
    },
    {
      name: "test-loan-8",
      creditScore: 700,
      rate: 1.8,
    },
    {
      name: "test-loan-9",
      creditScore: 620,
      rate: 4.52,
    },
    {
      name: "test-loan-10",
      creditScore: 757,
      rate: 2.5,
    },
  ],
};

export function getLoans() {
  return db.loans;
}
