export default function ErrorPage() {

  const handleButton = () => {
    window.location.reload();
  }
  
    return (
      <>
      <div>
        <div className="errorheader">
          <h2>Error 404</h2>
        </div>
        <div className="errortext">
          <h3>Vi beklager!</h3>
          <p>Den side du leder efter findes ikke</p>
          <button onClick={handleButton}>Gå til fosiden</button>
        </div>
      </div>
      </>
    );
  }