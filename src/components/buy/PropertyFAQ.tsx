export const GLOBAL_FAQS = [
  {
    question: "Can foreigners buy property in Spain?",
    answer: "Yes, foreigners can freely purchase property in Spain, whether for personal use, investment, or retirement. There are no restrictions based on nationality. However, non-EU buyers should be aware of potential regulatory changes, such as proposed taxes targeting non-EU property purchases."
  },
  {
    question: "What is an NIE, and why do I need it?",
    answer: "The NIE (Número de Identificación de Extranjero) is a tax identification number required for all legal and financial transactions in Spain, including property purchases. You must obtain it before signing the deed. It can be acquired through Spanish consulates abroad or directly in Spain."
  },
  {
    question: "What taxes and fees are involved in buying property?",
    answer: "Buyers should budget for:\n\nTransfer Tax (ITP): 6–10% for resale properties.\nVAT (IVA): 10% for new properties, plus 1.5% for stamp duty.\nNotary, registration, and legal fees: Approximately 2–3% of the purchase price."
  },
  {
    question: "Can I get a mortgage in Spain as a non-resident?",
    answer: "Yes, non-residents can obtain mortgages from Spanish banks. Typically, banks offer up to 70% financing for non-residents, requiring a 30% down payment plus additional funds for taxes and fees."
  },
  {
    question: "What is the process of buying a home in Spain?",
    answer: "The general steps include:\n\nObtain an NIE.\nOpen a Spanish bank account.\nFind a property and make an offer.\nSign a reservation agreement and pay a deposit.\nConduct due diligence (legal and structural checks).\nSign the purchase deed before a notary.\nRegister the property and pay associated taxes."
  },
  {
    question: "Should I hire a lawyer?",
    answer: "While not mandatory, hiring an independent lawyer is highly recommended. A lawyer will ensure the property is free of debts, verify legal documentation, and protect your interests throughout the transaction."
  },
  {
    question: "What is the \"cédula de habitabilidad\"?",
    answer: "This is the certificate of occupancy, confirming that a property meets habitability standards. It’s essential for utility registration and, in some regions, for property rentals."
  },
  {
    question: "Are there restrictions on renting out my property?",
    answer: "Rental regulations vary by region. Some areas require a tourist license for short-term rentals, and there may be restrictions in place to control housing availability for locals."
  },
  {
    question: "What ongoing taxes will I owe after purchasing?",
    answer: "Owners must pay:\n\nIBI (Impuesto sobre Bienes Inmuebles): Annual property tax.\nNon-Resident Income Tax: If you don’t live in Spain full-time.\nWealth Tax: Applicable for high-value properties, depending on regional laws."
  },
  {
    question: "What is the Golden Visa, and is it still available?",
    answer: "The Golden Visa program granted residency to non-EU citizens investing €500,000 or more in Spanish real estate. However, as of April 2025, the program has been discontinued."
  },
  {
    question: "How long does the buying process take?",
    answer: "Typically, the process takes 1–3 months, depending on factors like obtaining an NIE, mortgage approval, and due diligence."
  },
  {
    question: "What documents are required to buy property?",
    answer: "Essential documents include:\n\nValid passport.\nNIE.\nProof of funds or mortgage pre-approval.\nSpanish bank account details.\nSigned reservation and purchase agreements."
  },
  {
    question: "What should I check during due diligence?",
    answer: "Ensure:\n\nThe property is free of debts or encumbrances.\nAll licenses and permits are in order.\nThere are no legal disputes involving the property.\nThe property’s physical condition is sound."
  },
  {
    question: "Are there common pitfalls to avoid?",
    answer: "Yes, including:\n\nNot understanding all taxes involved.\nSkipping due diligence.\nNot verifying the property’s legal status.\nFailing to account for additional costs."
  },
  {
    question: "Can I buy property remotely?",
    answer: "Yes, with a power of attorney, a representative can handle the purchase on your behalf. This is common for international buyers."
  },
  {
    question: "What are typical property prices in major cities?",
    answer: "Average prices per square meter:\n\nMadrid: €3,682\nBarcelona: €4,009\nValencia: €1,824\nMalaga: €2,091\nPalma de Mallorca: €2,897"
  },
  {
    question: "How do I choose the right location?",
    answer: "Consider factors like proximity to amenities, climate, transportation links, and whether the area suits your lifestyle or investment goals. Popular regions include Costa del Sol, Balearic Islands, and major cities like Madrid and Barcelona."
  },
  {
    question: "What is the role of a notary in the buying process?",
    answer: "The notary ensures the legality of the transaction, verifies the identities of parties involved, and records the sale in the public registry."
  },
  {
    question: "Are there any residency requirements after purchase?",
    answer: "Owning property does not automatically grant residency. If you plan to stay long-term, you must apply for the appropriate visa or residency permit."
  },
  {
    question: "What are the implications of proposed taxes on non-EU buyers?",
    answer: "Spain has considered implementing a 100% tax on properties bought by non-EU citizens to address housing affordability issues. While not yet enacted, it’s essential to stay informed about such policy changes."
  }
];

export default function PropertyFAQ() {
  return (
    <div className="reveal max-w-4xl mx-auto mb-24">
      <div className="text-center mb-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bronze)] mb-3">Resources</p>
        <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-sand)] mb-4">Frequently Asked Questions</h2>
        <p className="text-[var(--color-sand-dim)] text-lg">Everything you need to know about purchasing property in Spain.</p>
      </div>
      
      <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {GLOBAL_FAQS.map((faq, i) => (
          <details key={i} className="group py-6">
            <summary className="flex cursor-pointer items-start justify-between font-serif text-xl text-[var(--color-sand)] marker:content-none hover:text-[var(--color-bronze)] transition-colors">
              <span className="pr-8">{faq.question}</span>
              <span className="text-[var(--color-bronze)] transition-transform duration-300 group-open:rotate-45 mt-1">+</span>
            </summary>
            <div className="mt-4 text-[var(--color-sand-dim)] font-light leading-relaxed whitespace-pre-line">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
