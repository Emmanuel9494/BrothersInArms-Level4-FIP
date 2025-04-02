export function FAQ() {
  function setupFAQ() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {
      question.addEventListener("click", function () {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains("active");

        // Close all FAQs first
        faqQuestions.forEach(function (q) {
          q.parentElement.classList.remove("active");
        });

        // Open clicked one if it wasn't active
        if (!isActive) {
          faqItem.classList.add("active");
        }
      });
    });
  }

  // Initialize when window loads
  window.onload = function () {
    setupFAQ();
  };
}
