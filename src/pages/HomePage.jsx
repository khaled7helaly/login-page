import Loan from "../Loan.jsx";
import HowItWorks from "../HowItWorks.jsx";
import Newsletter from "../Newsletter.jsx";
import ThemeToggle from "../ThemeToggle.jsx";

export default function HomePage() {
  return (
    <>
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>

      <Loan />
      <HowItWorks />
      <Newsletter />
    </>
  );
}