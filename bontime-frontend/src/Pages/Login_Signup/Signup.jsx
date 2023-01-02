import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Text,
  Link,
  VStack,
  // Alert,
  // AlertIcon,
  // AlertTitle,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import { FooterLogin } from "./FooterLogin";
import Axios from "axios";
const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "land Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];
const currency_list = [
  { name: "Afghan Afghani", code: "AFA" },
  { name: "Albanian Lek", code: "ALL" },
  { name: "Algerian Dinar", code: "DZD" },
  { name: "Angolan Kwanza", code: "AOA" },
  { name: "Argentine Peso", code: "ARS" },
  { name: "Armenian Dram", code: "AMD" },
  { name: "Aruban Florin", code: "AWG" },
  { name: "Australian Dollar", code: "AUD" },
  { name: "Azerbaijani Manat", code: "AZN" },
  { name: "Bahamian Dollar", code: "BSD" },
  { name: "Bahraini Dinar", code: "BHD" },
  { name: "Bangladeshi Taka", code: "BDT" },
  { name: "Barbadian Dollar", code: "BBD" },
  { name: "Belarusian Ruble", code: "BYR" },
  { name: "Belgian Franc", code: "BEF" },
  { name: "Belize Dollar", code: "BZD" },
  { name: "Bermudan Dollar", code: "BMD" },
  { name: "Bhutanese Ngultrum", code: "BTN" },
  { name: "Bitcoin", code: "BTC" },
  { name: "Bolivian Boliviano", code: "BOB" },
  { name: "Bosnia-Herzegovina Convertible Mark", code: "BAM" },
  { name: "Botswanan Pula", code: "BWP" },
  { name: "Brazilian Real", code: "BRL" },
  { name: "British Pound Sterling", code: "GBP" },
  { name: "Brunei Dollar", code: "BND" },
  { name: "Bulgarian Lev", code: "BGN" },
  { name: "Burundian Franc", code: "BIF" },
  { name: "Cambodian Riel", code: "KHR" },
  { name: "Canadian Dollar", code: "CAD" },
  { name: "Cape Verdean Escudo", code: "CVE" },
  { name: "Cayman Islands Dollar", code: "KYD" },
  { name: "CFA Franc BCEAO", code: "XOF" },
  { name: "CFA Franc BEAC", code: "XAF" },
  { name: "CFP Franc", code: "XPF" },
  { name: "Chilean Peso", code: "CLP" },
  { name: "Chinese Yuan", code: "CNY" },
  { name: "Colombian Peso", code: "COP" },
  { name: "Comorian Franc", code: "KMF" },
  { name: "Congolese Franc", code: "CDF" },
  { name: "Costa Rican ColÃ³n", code: "CRC" },
  { name: "Croatian Kuna", code: "HRK" },
  { name: "Cuban Convertible Peso", code: "CUC" },
  { name: "Czech Republic Koruna", code: "CZK" },
  { name: "Danish Krone", code: "DKK" },
  { name: "Djiboutian Franc", code: "DJF" },
  { name: "Dominican Peso", code: "DOP" },
  { name: "East Caribbean Dollar", code: "XCD" },
  { name: "Egyptian Pound", code: "EGP" },
  { name: "Eritrean Nakfa", code: "ERN" },
  { name: "Estonian Kroon", code: "EEK" },
  { name: "Ethiopian Birr", code: "ETB" },
  { name: "Euro", code: "EUR" },
  { name: "Falkland Islands Pound", code: "FKP" },
  { name: "Fijian Dollar", code: "FJD" },
  { name: "Gambian Dalasi", code: "GMD" },
  { name: "Georgian Lari", code: "GEL" },
  { name: "German Mark", code: "DEM" },
  { name: "Ghanaian Cedi", code: "GHS" },
  { name: "Gibraltar Pound", code: "GIP" },
  { name: "Greek Drachma", code: "GRD" },
  { name: "Guatemalan Quetzal", code: "GTQ" },
  { name: "Guinean Franc", code: "GNF" },
  { name: "Guyanaese Dollar", code: "GYD" },
  { name: "Haitian Gourde", code: "HTG" },
  { name: "Honduran Lempira", code: "HNL" },
  { name: "Hong Kong Dollar", code: "HKD" },
  { name: "Hungarian Forint", code: "HUF" },
  { name: "Icelandic KrÃ³na", code: "ISK" },
  { name: "Indian Rupee", code: "INR" },
  { name: "Indonesian Rupiah", code: "IDR" },
  { name: "Iranian Rial", code: "IRR" },
  { name: "Iraqi Dinar", code: "IQD" },
  { name: "Israeli New Sheqel", code: "ILS" },
  { name: "Italian Lira", code: "ITL" },
  { name: "Jamaican Dollar", code: "JMD" },
  { name: "Japanese Yen", code: "JPY" },
  { name: "Jordanian Dinar", code: "JOD" },
  { name: "Kazakhstani Tenge", code: "KZT" },
  { name: "Kenyan Shilling", code: "KES" },
  { name: "Kuwaiti Dinar", code: "KWD" },
  { name: "Kyrgystani Som", code: "KGS" },
  { name: "Laotian Kip", code: "LAK" },
  { name: "Latvian Lats", code: "LVL" },
  { name: "Lebanese Pound", code: "LBP" },
  { name: "Lesotho Loti", code: "LSL" },
  { name: "Liberian Dollar", code: "LRD" },
  { name: "Libyan Dinar", code: "LYD" },
  { name: "Lithuanian Litas", code: "LTL" },
  { name: "Macanese Pataca", code: "MOP" },
  { name: "Macedonian Denar", code: "MKD" },
  { name: "Malagasy Ariary", code: "MGA" },
  { name: "Malawian Kwacha", code: "MWK" },
  { name: "Malaysian Ringgit", code: "MYR" },
  { name: "Maldivian Rufiyaa", code: "MVR" },
  { name: "Mauritanian Ouguiya", code: "MRO" },
  { name: "Mauritian Rupee", code: "MUR" },
  { name: "Mexican Peso", code: "MXN" },
  { name: "Moldovan Leu", code: "MDL" },
  { name: "Mongolian Tugrik", code: "MNT" },
  { name: "Moroccan Dirham", code: "MAD" },
  { name: "Mozambican Metical", code: "MZM" },
  { name: "Myanmar Kyat", code: "MMK" },
  { name: "Namibian Dollar", code: "NAD" },
  { name: "Nepalese Rupee", code: "NPR" },
  { name: "Netherlands Antillean Guilder", code: "ANG" },
  { name: "New Taiwan Dollar", code: "TWD" },
  { name: "New Zealand Dollar", code: "NZD" },
  { name: "Nicaraguan CÃ³rdoba", code: "NIO" },
  { name: "Nigerian Naira", code: "NGN" },
  { name: "North Korean Won", code: "KPW" },
  { name: "Norwegian Krone", code: "NOK" },
  { name: "Omani Rial", code: "OMR" },
  { name: "Pakistani Rupee", code: "PKR" },
  { name: "Panamanian Balboa", code: "PAB" },
  { name: "Papua New Guinean Kina", code: "PGK" },
  { name: "Paraguayan Guarani", code: "PYG" },
  { name: "Peruvian Nuevo Sol", code: "PEN" },
  { name: "Philippine Peso", code: "PHP" },
  { name: "Polish Zloty", code: "PLN" },
  { name: "Qatari Rial", code: "QAR" },
  { name: "Romanian Leu", code: "RON" },
  { name: "Russian Ruble", code: "RUB" },
  { name: "Rwandan Franc", code: "RWF" },
  { name: "Salvadoran ColÃ³n", code: "SVC" },
  { name: "Samoan Tala", code: "WST" },
  { name: "Saudi Riyal", code: "SAR" },
  { name: "Serbian Dinar", code: "RSD" },
  { name: "Seychellois Rupee", code: "SCR" },
  { name: "Sierra Leonean Leone", code: "SLL" },
  { name: "Singapore Dollar", code: "SGD" },
  { name: "Slovak Koruna", code: "SKK" },
  { name: "Solomon Islands Dollar", code: "SBD" },
  { name: "Somali Shilling", code: "SOS" },
  { name: "South African Rand", code: "ZAR" },
  { name: "South Korean Won", code: "KRW" },
  { name: "Special Drawing Rights", code: "XDR" },
  { name: "Sri Lankan Rupee", code: "LKR" },
  { name: "St. Helena Pound", code: "SHP" },
  { name: "Sudanese Pound", code: "SDG" },
  { name: "Surinamese Dollar", code: "SRD" },
  { name: "Swazi Lilangeni", code: "SZL" },
  { name: "Swedish Krona", code: "SEK" },
  { name: "Swiss Franc", code: "CHF" },
  { name: "Syrian Pound", code: "SYP" },
  { name: "São Tomé and Príncipe Dobra", code: "STD" },
  { name: "Tajikistani Somoni", code: "TJS" },
  { name: "Tanzanian Shilling", code: "TZS" },
  { name: "Thai Baht", code: "THB" },
  { name: "Tongan Pa'anga", code: "TOP" },
  { name: "Trinidad & Tobago Dollar", code: "TTD" },
  { name: "Tunisian Dinar", code: "TND" },
  { name: "Turkish Lira", code: "TRY" },
  { name: "Turkmenistani Manat", code: "TMT" },
  { name: "Ugandan Shilling", code: "UGX" },
  { name: "Ukrainian Hryvnia", code: "UAH" },
  { name: "United Arab Emirates Dirham", code: "AED" },
  { name: "Uruguayan Peso", code: "UYU" },
  { name: "US Dollar", code: "USD" },
  { name: "Uzbekistan Som", code: "UZS" },
  { name: "Vanuatu Vatu", code: "VUV" },
  { name: "Venezuelan BolÃvar", code: "VEF" },
  { name: "Vietnamese Dong", code: "VND" },
  { name: "Yemeni Rial", code: "YER" },
  { name: "Zambian Kwacha", code: "ZMK" },
];
const intialData = {
  email: "",
  name: "",
  password: "",
  country: "India",
  currency: "INR",
};
export const SignUp = () => {
  const navigate = useNavigate();

  const url = "https://holy-wave-7256.fly.dev/users/signup";

  const [data, setData] = useState(intialData);

  async function submit(e) {
    const { email, name, password, country, currency } = data;
    e.preventDefault();

    await Axios.post(url, {
      email,
      name,
      password,
      country,
      currency,
    })
      .then((res) => {
        // console.log(res.data);
        toast.success("SignUp successful!");
        setTimeout(() => {
          setData(intialData);
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.message);
      });
  }

  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Box w={["100%", "100%", "100%", "75%"]} m="50px auto" p="0px 40px">
        <SimpleGrid columns={[1, null, 2]} spacing="0px">
          <Box
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            h={["auto", "auto", "auto", "auto"]}
            textAlign={"center"}
          >
            <VStack
              justify={"space-between"}
              h={["auto", "auto", "auto", "100vh"]}
            >
              <Box w="80%" m="auto" className={styles.signuppage}>
                <Image
                  width={"150px"}
                  pt="40px"
                  px="30px"
                  src="https://app.hellobonsai.com/assets/logos/bonsai-0fe7c417d79806408d8117d5a0ca871f0be3afb1104d54b53f59f53cbda2f28b.svg"
                />
                <Text
                  fontWeight={"bold"}
                  width="70%"
                  m="auto"
                  textAlign={"left"}
                >
                  Join 500,000+ freelancers and agencies using Bonsai.
                </Text>
              </Box>
              <Box w="60%" m="auto">
                <svg
                  className="signup-page-cp-quote-icon"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                >
                  <path
                    d="M20.4582 3.2C18.1262 3.36 16.1387 4.82667 15.1847 6.85333H18.2057C19.4512 6.85333 20.4847 7.86667 20.4847 9.14667V13.7067C20.4847 14.96 19.4777 16 18.2057 16H13.6212C12.3756 16 11.3421 14.9867 11.3421 13.7067V9.14667C11.3421 4.10667 15.4232 0 20.4317 0C20.4317 0 21.3328 0 21.3328 0.906667C21.3328 0.906667 21.3328 1.06667 21.3328 2.26667C21.3593 3.2 20.4582 3.2 20.4582 3.2ZM9.08961 3.2C6.75758 3.36 4.77006 4.82667 3.81605 6.85333H6.83708C8.0826 6.85333 9.11611 7.86667 9.11611 9.14667V13.7067C9.11611 14.96 8.1091 16 6.83708 16H2.27903C1.03351 16 0 14.9867 0 13.7067V9.14667C0 4.10667 4.08105 0 9.08961 0C9.08961 0 9.99062 0 9.99062 0.906667C9.99062 0.906667 9.99062 1.06667 9.99062 2.26667C9.99062 3.2 9.08961 3.2 9.08961 3.2Z"
                    fill="#00b289"
                  ></path>
                </svg>
                <Text fontSize="12" fontStyle={"italic"}>
                  Anyone doing #freelance work should use @bonsaiinc for
                  contracts/payment. It's amazing and saves boatloads of time.
                  Nathanael Smith, Product Designer
                </Text>
              </Box>
            </VStack>
          </Box>

          <Box
            textAlign={"center"}
            p="30px 0px"
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <Heading p="0px 30px" as="h3" size="lg" textAlign={"left"}>
              Try Bonsai free with your Workflow today{" "}
            </Heading>
            <br />
            <br />
            <Button w="80%" variant={"outline"} borderRadius={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="169"
                height="18"
                fill="none"
                viewBox="0 0 169 18"
              >
                <path
                  fill="#4285F4"
                  fillRule="evenodd"
                  d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#34A853"
                  fillRule="evenodd"
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#FBBC05"
                  fillRule="evenodd"
                  d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#EA4335"
                  fillRule="evenodd"
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#4285F4"
                  fillRule="evenodd"
                  d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#34A853"
                  fillRule="evenodd"
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#FBBC05"
                  fillRule="evenodd"
                  d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#EA4335"
                  fillRule="evenodd"
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                  clipRule="evenodd"
                ></path>
                <path
                  transform="translate(0 2)"
                  fill="#757575"
                  d="M48.214 10.437c0-.438-.155-.775-.465-1.012-.305-.237-.859-.476-1.661-.718s-1.44-.51-1.914-.807c-.907-.57-1.36-1.312-1.36-2.228 0-.802.325-1.463.977-1.983.656-.52 1.506-.779 2.55-.779.692 0 1.31.128 1.852.383.543.255.969.62 1.279 1.094.31.47.465.99.465 1.565h-1.723c0-.52-.164-.925-.492-1.217-.324-.296-.789-.444-1.395-.444-.565 0-1.005.12-1.32.362-.31.242-.464.58-.464 1.012 0 .365.169.67.506.916.337.242.893.479 1.668.711.775.228 1.397.49 1.866.786.47.292.814.629 1.032 1.012.219.378.328.822.328 1.333 0 .83-.319 1.49-.957 1.982-.633.488-1.494.732-2.584.732-.72 0-1.383-.132-1.989-.397-.601-.269-1.07-.638-1.408-1.107-.333-.47-.5-1.016-.5-1.64h1.73c0 .564.187 1.002.56 1.312.375.31.91.465 1.607.465.602 0 1.053-.121 1.354-.363.305-.246.458-.57.458-.97zM53.067 13h-1.66V5.604h1.66V13zm-1.763-9.317c0-.256.08-.468.239-.636.164-.169.397-.253.697-.253.301 0 .533.084.697.253.165.168.247.38.247.636 0 .25-.082.46-.246.629-.165.164-.397.246-.698.246-.3 0-.533-.082-.697-.246a.88.88 0 01-.24-.63zm3.288 5.564c0-1.148.269-2.064.806-2.748.543-.688 1.26-1.032 2.154-1.032.843 0 1.506.294 1.989.882l.075-.745h1.497v7.17c0 .971-.303 1.737-.909 2.297-.602.56-1.415.841-2.44.841a3.929 3.929 0 01-1.593-.342c-.515-.223-.907-.517-1.176-.882l.786-.998c.51.607 1.14.91 1.887.91.551 0 .987-.15 1.306-.452.319-.296.478-.733.478-1.312v-.5c-.478.534-1.116.8-1.914.8-.866 0-1.574-.343-2.126-1.031-.547-.689-.82-1.641-.82-2.858zm1.654.144c0 .742.15 1.328.451 1.757.306.423.727.635 1.265.635.67 0 1.167-.287 1.49-.861V7.668c-.314-.56-.806-.84-1.476-.84-.547 0-.973.216-1.279.649-.3.433-.45 1.07-.45 1.914zm8.121-3.787l.048.854c.547-.66 1.265-.991 2.153-.991 1.54 0 2.325.882 2.352 2.645V13h-1.661V8.208c0-.47-.103-.816-.308-1.04-.2-.227-.53-.34-.991-.34-.67 0-1.169.302-1.497.908V13h-1.661V5.604h1.565zM76.091 13h-1.723V3.047h1.723V13zm3.507-7.396l.047.854c.547-.66 1.265-.991 2.154-.991 1.54 0 2.324.882 2.351 2.645V13h-1.66V8.208c0-.47-.103-.816-.308-1.04-.2-.227-.531-.34-.992-.34-.67 0-1.168.302-1.497.908V13h-1.66V5.604h1.565zm16.235 5.106l1.176-5.106h1.62L96.612 13h-1.367L93.66 7.92 92.101 13h-1.368L88.71 5.604h1.62l1.196 5.051 1.518-5.051h1.25l1.539 5.106zm5.674 2.29h-1.661V5.604h1.661V13zm-1.764-9.317c0-.256.08-.468.24-.636.163-.169.396-.253.697-.253.3 0 .533.084.697.253.164.168.246.38.246.636 0 .25-.082.46-.246.629-.164.164-.397.246-.697.246-.301 0-.534-.082-.698-.246a.88.88 0 01-.239-.63zm5.66.123v1.798h1.306v1.23h-1.306v4.129c0 .282.055.488.164.615.114.123.315.185.602.185.191 0 .385-.023.581-.069v1.285a4.092 4.092 0 01-1.094.158c-1.276 0-1.914-.704-1.914-2.113v-4.19h-1.217v-1.23h1.217V3.806h1.661zm4.218 2.604a2.6 2.6 0 012.058-.943c1.577 0 2.376.9 2.399 2.7V13h-1.661V8.229c0-.51-.112-.87-.335-1.08-.219-.215-.542-.322-.971-.322-.665 0-1.162.296-1.49.889V13h-1.661V2.5h1.661v3.91zm17.418 5.298c-.36.47-.859.825-1.497 1.066-.638.242-1.363.363-2.174.363-.834 0-1.572-.19-2.215-.568a3.808 3.808 0 01-1.49-1.62c-.346-.706-.526-1.529-.54-2.468v-.779c0-1.504.36-2.677 1.08-3.52.72-.848 1.725-1.272 3.015-1.272 1.107 0 1.987.274 2.638.82.652.547 1.044 1.336 1.176 2.366h-1.695c-.191-1.199-.886-1.798-2.085-1.798-.775 0-1.365.28-1.771.84-.401.557-.608 1.375-.622 2.455v.765c0 1.076.226 1.912.677 2.51.456.592 1.087.888 1.894.888.884 0 1.513-.2 1.886-.602V9.206h-2.05V7.894h3.773v3.814zm1.429-2.475c0-.724.143-1.376.43-1.955.288-.583.691-1.03 1.21-1.34.52-.314 1.117-.471 1.791-.471.998 0 1.807.321 2.427.964.625.642.962 1.494 1.012 2.556l.007.39c0 .73-.142 1.38-.424 1.955a3.08 3.08 0 01-1.203 1.333c-.52.315-1.121.472-1.805.472-1.044 0-1.88-.347-2.509-1.04-.624-.697-.936-1.624-.936-2.782v-.082zm1.661.144c0 .761.157 1.358.472 1.791.314.428.752.643 1.312.643.561 0 .996-.22 1.306-.657.314-.437.471-1.078.471-1.92 0-.748-.161-1.34-.485-1.778-.319-.437-.754-.656-1.306-.656-.542 0-.973.216-1.292.65-.319.428-.478 1.07-.478 1.927zm6.309-.144c0-.724.144-1.376.431-1.955a3.122 3.122 0 011.21-1.34c.52-.314 1.117-.471 1.791-.471.998 0 1.807.321 2.427.964.624.642.961 1.494 1.012 2.556l.006.39c0 .73-.141 1.38-.423 1.955a3.076 3.076 0 01-1.204 1.333c-.519.315-1.121.472-1.804.472-1.044 0-1.88-.347-2.509-1.04-.624-.697-.937-1.624-.937-2.782v-.082zm1.662.144c0 .761.157 1.358.471 1.791.315.428.752.643 1.313.643.56 0 .996-.22 1.305-.657.315-.437.472-1.078.472-1.92 0-.748-.162-1.34-.485-1.778-.319-.437-.754-.656-1.306-.656-.542 0-.973.216-1.292.65-.319.428-.478 1.07-.478 1.927zm6.33-.13c0-1.148.269-2.064.806-2.748.543-.688 1.26-1.032 2.154-1.032.843 0 1.506.294 1.989.882l.075-.745h1.497v7.17c0 .971-.303 1.737-.909 2.297-.602.56-1.415.841-2.44.841a3.925 3.925 0 01-1.593-.342c-.515-.223-.907-.517-1.176-.882l.786-.998c.511.607 1.139.91 1.887.91.551 0 .987-.15 1.306-.452.319-.296.478-.733.478-1.312v-.5c-.478.534-1.116.8-1.914.8-.866 0-1.575-.343-2.126-1.031-.547-.689-.82-1.641-.82-2.858zm1.654.144c0 .742.15 1.328.451 1.757.305.423.727.635 1.265.635.67 0 1.166-.287 1.49-.861V7.668c-.314-.56-.807-.84-1.477-.84-.546 0-.973.216-1.278.649-.301.433-.451 1.07-.451 1.914zM154.431 13h-1.661V2.5h1.661V13zm5.072.137c-1.053 0-1.907-.33-2.564-.992-.651-.665-.977-1.549-.977-2.652v-.205c0-.738.141-1.397.424-1.976a3.27 3.27 0 011.203-1.36 3.172 3.172 0 011.723-.485c1.007 0 1.784.321 2.331.964.551.642.827 1.551.827 2.727v.67h-4.833c.05.61.253 1.094.608 1.45.36.355.811.532 1.354.532.761 0 1.38-.307 1.859-.922l.896.854a3.016 3.016 0 01-1.19 1.032 3.72 3.72 0 01-1.661.363zm-.198-6.337c-.456 0-.825.16-1.108.478-.278.32-.455.764-.533 1.333h3.165v-.123c-.036-.556-.184-.975-.444-1.258-.26-.287-.62-.43-1.08-.43z"
                ></path>
              </svg>
            </Button>

            <br />
            <br />
            <Text fontSize={"12px"} textAlign={"center"} color="#bbbbbb">
              OR
            </Text>
            <br />
            <form onSubmit={(e) => submit(e)}>
              <Box w="80%" m="0px auto">
                <Text
                  textAlign={"left"}
                  mb="8px"
                  textTransform={"uppercase"}
                  fontSize="14px"
                >
                  Email
                </Text>

                <Input
                  type="email"
                  id="email"
                  value={data.email}
                  placeholder="your@gmail.com"
                  borderRadius={0}
                  required
                  onChange={(e) => handleData(e)}
                  // value="eve.holt@reqres.in"
                />
              </Box>
              <br />
              <Box w="80%" m="0px auto">
                <Text
                  textAlign={"left"}
                  mb="8px"
                  textTransform={"uppercase"}
                  fontSize="14px"
                >
                  full name
                </Text>

                <Input
                  type="text"
                  id="name"
                  value={data.name}
                  placeholder="John Smith"
                  borderRadius={0}
                  onChange={(e) => handleData(e)}
                  // value="John Smith"
                />
              </Box>
              <br />
              <Box w="80%" m="0px auto">
                <Text
                  textAlign={"left"}
                  mb="8px"
                  textTransform={"uppercase"}
                  fontSize="14px"
                >
                  Password
                </Text>

                <InputGroup m="auto">
                  <Input
                    type={"password"}
                    id="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => handleData(e)}
                    // value="cityslicka"
                  />

                  <InputRightElement
                    cursor={"pointer"}
                    children={<BsEyeFill color="gray.300" />}
                  />
                </InputGroup>
                <Text fontSize="10px" textAlign={"left"} mt="5px">
                  Your password must be at least 6 characters
                </Text>
              </Box>

              <Box w="80%" m="20px auto">
                <HStack gap="20px">
                  <Box w="60%">
                    <Text
                      textAlign={"left"}
                      mb="8px"
                      textTransform={"uppercase"}
                      fontSize="14px"
                    >
                      country
                    </Text>

                    <Select
                      placeholder="India"
                      id="country"
                      value={data.country}
                      onChange={(e) => handleData(e)}
                      textTransform={"uppercase"}
                    >
                      {countries.map(({ name }, index) => (
                        <option key={index} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </Box>
                  <Box>
                    <Text
                      textAlign={"left"}
                      mb="8px"
                      textTransform={"uppercase"}
                      fontSize="14px"
                    >
                      currency
                    </Text>
                    <Select
                      placeholder="inr"
                      id="currency"
                      onChange={(e) => handleData(e)}
                      textTransform={"uppercase"}
                      value={data.currency}
                    >
                      {currency_list.map(({ code }, index) => (
                        <option key={index} value={code}>
                          {code}
                        </option>
                      ))}
                    </Select>
                  </Box>
                </HStack>
              </Box>

              <br />

              <Box w="80%" m="0px auto">
                <Button
                  w="100%"
                  colorScheme="green"
                  borderRadius={0}
                  type="submit"
                >
                  Create Free Account
                </Button>
              </Box>
              <Toaster />
            </form>

            <Text
              my="20px"
              fontSize={"12px"}
              textAlign={"center"}
              color="#bbbbbb
"
            >
              Already have an account
            </Text>
            <Link href="/login">
              <Box w="80%" m="0px auto">
                <Button
                  variant="outline"
                  w="100%"
                  colorScheme="green"
                  borderRadius={0}
                >
                  {/* <Link  isExternal> */}
                  Login
                  {/* </Link> */}
                </Button>
              </Box>
            </Link>

            <br />
          </Box>
        </SimpleGrid>
      </Box>
      <FooterLogin />
    </>
  );
};
