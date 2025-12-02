import { prisma } from "../../lib/prisma";

async function main() {
  console.log("Running DB test…");

  // Count DB 
  const count = await prisma.inquiry.count();
  console.log(`Current inquiries in DB: ${count}`);

  // Create Fake Test Inquiry
  const testInquiry = await prisma.inquiry.create({
    data: {
      name: "Test User",
      email: "test@example.com",
      phone: "0400000000",
      instagram: "@test",
      date: new Date(),
      location: "Test Hotel, Adelaide",
      occasion: "test",
      package: "classic",
      message: "This is a test enquiry created by test-db.ts",
    },
  });

  console.log("Created test inquiry with id:", testInquiry.id);

  const newCount = await prisma.inquiry.count();
  console.log(`New inquiries count: ${newCount}`);
}

// RUN with npm run test:db
main()
  .catch((err) => {
    console.error("DB test failed:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
