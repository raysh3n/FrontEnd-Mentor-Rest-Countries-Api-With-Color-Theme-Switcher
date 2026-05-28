import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function CountryDetail() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [borderState, setBorderState] = useState("idle");
  const [bordersState, setBordersState] = useState("idle");
  const url = `https://restcountries.com/v3.1/alpha/${countryName}`;
  const borderUrl = `https://restcountries.com/v3.1/alpha/?codes=`;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        // throw new Error(res.status); 
        return res.json()
      })
      .then((data) => {
        setCountry(data[0]); //only the next render, the country value will be updated. It's not now, it will be the next render.
        setBorderState("done");
       if (data[0].borders) setBordersState("fetching");
        return data[0].borders;
      })
      .then((data) => {
        if (data) {
        return  fetch(`${borderUrl}${data.join(",")}`)
          .then((res) => {
            if (!res.ok) throw new Error('border fail');
            return res.json();
            // throw new Error('border fail')
          })
            .then(
              (data) => {                
                
                setBorderCountries(data);
                setBordersState("done");
              }, //setBorderCountries(data.map(c => c.cca3))
            )
        //     .then(() => {
        //       setBorderState("done");
        //       console.log(`array is ${borderCountries}`);
        //     });
        }
        else {
          // setBorderState("done");
        }
      }).catch(error => {

        error.message === "border fail"? setBordersState(error.message):setBorderState("error") });
    // .then((country) => {
    //   //border
    //  country.borders.map(c=>fetch())
    // }); // console.log(country)
  }, [countryName]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountry(data[0]);
  //       // console.log(data[0]);
  //       // return data[0];
  //     })
  //     .then(() => {

  //       if (country?.borders) {

  //         fetch(`${borderUrl}${country.borders.join(',')}`)
  //           .then((res) => res.json())
  //           .then((data) => { setBorderCountries(data); } //setBorderCountries(data.map(c => c.cca3))
  //           )
  //           .then(() => { setBorderState("done"); console.log(`array is ${borderCountries}`) })
  //       } else { setBorderState("done"); }

  //     }

  //     )
  //     // .then((country) => {
  //     //   //border
  //     //  country.borders.map(c=>fetch())
  //     // }); // console.log(country)
  // }, [countryName]);

  //  useEffect(() => {
  //    if (country?.borders) {

  //      fetch(`${borderUrl}${country.borders.join(',')}`)
  //        .then((res) => res.json())
  //        .then((data) => { setBorderCountries(data); } //setBorderCountries(data.map(c => c.cca3))
  //        )
  //        .then(() => { setBorderState("done"); console.log(`array is ${borderCountries}`) })
  //    } else { setBorderState("done"); }
  // },[country?.borders])

  // console.log('hi')
  // console.log([][0]); //undefined

  return (
    <div className="container mx-auto px-4 py-6 dark:text-white transition-colors duration-300">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="flex items-center gap-3 px-12 py-2 shadow-[rgba(0,0,0,0.16)_0px_1px_4px] bg-white dark:bg-[hsl(209,23%,22%)] dark:text-white"
      >
        <ion-icon name="arrow-back-outline" size="medium"></ion-icon>
        <span>Back</span>
      </button>

      {
        borderState==="error"? <div>Load failed. Something went wrong</div> :(
        country && borderState === "done" ? (
        //need to use country && to say that don't render the stuff below until there is value for this country(need time to fetch the data)
        <div className="mt-20 grid h-full grid-cols-1 border-slate-500 md:grid-cols-2 md:gap-10 lg:gap-20">
          {" "}
          {/*master container */}
          <div className="max-h-[96rem] w-full">
            {" "}
            {/*first big grid */}
            <img
              src={country.flags.svg}
              onError={(e) => (e.target.src = "/file-not-found.webp")}
              className="h-auto max-w-full border-emerald-700 object-contain shadow-[rgba(0,0,0,0.16)_0px_1px_4px]"
            />
          </div>
          <div className="flex flex-col self-center py-4">
            {" "}
            {/*second big grid */}
            <div className="pb-4 text-2xl font-extrabold dark:text-white">
              {country.name.common}
            </div>
            <div className="my-4 grid grid-cols-1 text-sm lg:grid-cols-2 md:justify-between">
              {" "}
              {/*section master */}
              <div className="flex flex-col gap-1 pb-4 pt-2 dark:text-white">
                {" "}
                {/*section for first detail */}
                <div className="flex">
                  <span className="font-semibold mr-2">Native Name:</span>
                  <span className="font-light">
                    {Object.values(country.name?.nativeName ?? {})[0]?.common ??
                      "N/A"}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-semibold mr-2">Population:</span>
                  <span className="font-light">{country.population.toLocaleString()}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold mr-2">Region:</span>
                  <span className="font-light">{country.region}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold mr-2 whitespace-nowrap">
                    Sub Region:
                  </span>
                  <span className="font-light">{country.subregion ?? "N/A"}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold mr-2">Capital:</span>
                  <span className="font-light">{country.capital ?? "N/A"}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 pb-2 pt-4 md:pt-2 dark:text-white">
                {/*second detail*/}
                <div className="flex">
                  <span className="font-semibold mr-2">Top Level Domain:</span>
                  <span className="font-light">{country.tld?.[0] ?? "N/A"}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold mr-2">Currencies:</span>
                  <span className="font-light">
                    {Object.values(country.currencies ?? {})
                      .map((cur) => cur.name)
                      .join(", ") || "N/A"}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-semibold mr-2">Languages:</span>
                  <span className="font-light">
                    {Object.values(country.languages ?? {}).join(", ") || "N/A"}
                  </span>{" "}
                  {/* object.values({}) will return [], object.values({}).join(',') leads to "" which is falsy, thats why NA can be shown */}
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-4 text-sm md:flex-row md:gap-2">
              {/*border */}
              <span className="font-semibold whitespace-nowrap py-2 pb-2 md:pb-0 dark:text-white">
                Border Countries:
              </span>

              <div className="flex flex-wrap gap-[0.5rem] dark:text-white">
                    {
                      bordersState === "border fail" ? <div className="pt-2 font-light">Failed to load borders</div> : (
                  
                  country && //prevent render N/A first
                        (borderCountries.length === 0 && borderState === "done" ? (
                          bordersState === "fetching" ? <div className="pt-2 font-light">Loading...</div> :
                          <div className="pt-2 font-light">N/A</div>
                  ) : (
                    borderCountries.map((country) => {
                      return (
                        <Link
                          to={`/${country.cca3}`}
                          className="px-2 py-2 shadow-[rgba(0,0,0,0.16)_0px_1px_4px] bg-white dark:bg-[hsl(209,23%,22%)] dark:text-white"
                        >
                          <span className="font-light">{country.name.common}</span>
                        </Link>
                      );
                    })
                  )))
                  // :<div className="pt-2">N/A</div>

                      
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
              <div className="dark:text-white">Loading Please Wait...</div>
      ))}
    </div>
  );
}
