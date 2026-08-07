import styles from "./donateNow.module.css";
import DonateNowForm from "./DonateNowForm";
const DonateNow = async ({searchParams}) => {
  const response = await fetch(
    "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=2a7ae2824bad40d9a5f48a46e15f7ed4",
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const data = await response.json();

  return (
    <section className={`wrapper ${styles.mainWrapper}`} id="payment">
      <div className="container spacing">
        <DonateNowForm currencyRates={data} />
      </div>
    </section>
  );
};

export default DonateNow;
