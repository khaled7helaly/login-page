// import './Loan.css'
// import { useState } from 'react'


// export default function Loan() {

//   const [name, setName] = useState('')
//   const [phone, setPhone] = useState('' )
//   const [address, setAddress] = useState('')
//   const [city, setCity] = useState('')
//   const [age, setAge] = useState('')
//   const [employed, setEmployed] = useState(false)
//   const [salary, setSalary] = useState('')

//   const [errors , setErrors] = useState([])
//   const [success, setSuccess] = useState("");

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const newErrors = [];

//   if (!name) newErrors.push("Name is required");
//   if (!phone) newErrors.push("Phone is required");
//   if (!salary) newErrors.push("Salary is required");
//   if (!address) newErrors.push("address is required ");
//   if (!city) newErrors.push("city is required ");
//   if (phone && phone.length !== 11) newErrors.push("Phone must be 11 digits");
//   if (age && (age < 18 || age > 65)) newErrors.push("Age must be between 18 and 65");

  
//   if (newErrors.length > 0) {
//  ;
//     setErrors(newErrors);
//         setSuccess("");
//         return;
//   }
//      setErrors([]);
//      setSuccess("Success ");

//     setTimeout(() => {
//     setErrors([]);
//     setSuccess("");
//     }, 3000);

// };


//   return (



//     <div className="Loan_Component">
//       <h1>Loan Component</h1>
//       <p>This is the loan component.</p>


//       <form onSubmit={handleSubmit}>
//         <hr />

//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

//         <br />

//         <label>Phone:</label>
//             <input type="tel" value={phone}

//         onChange={(e) => {
//             const value = e.target.value;

//             if (/^\d{0,11}$/.test(value)) {
//             setPhone(value);
//             }
//         }}
//         />

//         <br />

//          <label>Address:</label>
//         <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>

//         <br /> 

//         <label>City:</label>
//         <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

//         <br />
//         <label> Age</label>
//         <input type="number" min="18" max="65" value={age} onChange={(e) => setAge(e.target.value)} />

//         <br />
        
//          <label>Are you employed?</label>
//         <input type="checkbox" checked={employed} onChange={(e)=> setEmployed(e.target.checked)} />

//         <br />

//         <label>Salary:</label>
//         <select value={salary}onChange={(e) => setSalary(e.target.value)}>

//         <option >Select salary</option>
//         <option value="less500">Less than 500$</option>
//         <option value="1000-3000">Between 1000$ - 3000$</option>
//         <option value="7000+">Top 7000$</option>

//         </select>

//         <br />

//         <button type="submit" >Submit</button>
        
//       </form>


//             {errors.length > 0 && (
//         <div className="error_tap">
//             {errors.map((err, index) => (
//             <p key={index}>{err}</p>
//             ))}
//         </div>
//         )}


//             {success && (
//     <div className="success_tap">
//         <p>{success}</p>
//     </div>
//     )}

//     </div>
    
//   )
// }



////////////////////////////////////////

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const initialFormData = {
//   name: "",
//   phone: "",
//   address: "",
//   city: "",
//   age: "",
//   employed: false,
//   salary: "",
// };

// export default function Loan() {
//   const [formData, setFormData] = useState(initialFormData);
//   const [errors, setErrors] = useState([]);
//   const [success, setSuccess] = useState("");

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;

//     setFormData((previousData) => ({
//       ...previousData,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     setErrors([]);
//     setSuccess("");
//   };

//   const handlePhoneChange = (event) => {
//     const value = event.target.value;

//     // يقبل أرقام فقط وبحد أقصى 11 رقم
//     if (/^\d{0,11}$/.test(value)) {
//       handleChange(event);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newErrors = [];

//     if (!formData.name.trim()) {
//       newErrors.push("Name is required");
//     }

//     if (!formData.phone.trim()) {
//       newErrors.push("Phone is required");
//     }

//     if (!formData.address.trim()) {
//       newErrors.push("Address is required");
//     }

//     if (!formData.city.trim()) {
//       newErrors.push("City is required");
//     }

//     if (!formData.age) {
//       newErrors.push("Age is required");
//     }

//     if (!formData.salary) {
//       newErrors.push("Salary is required");
//     }

//     if (
//       formData.phone &&
//       !/^\d{11}$/.test(formData.phone)
//     ) {
//       newErrors.push("Phone must be exactly 11 digits");
//     }

//     if (
//       formData.age &&
//       (Number(formData.age) < 18 ||
//         Number(formData.age) > 65)
//     ) {
//       newErrors.push("Age must be between 18 and 65");
//     }

//     if (newErrors.length > 0) {
//       setErrors(newErrors);
//       setSuccess("");

//       setTimeout(() => {
//         setErrors([]);
//       }, 3000);

//       return;
//     }

//     setErrors([]);
//     setSuccess("Application submitted successfully");
//     setFormData(initialFormData);

//     setTimeout(() => {
//       setSuccess("");
//     }, 3000);
//   };

//   const isValid =
//     formData.name.trim() &&
//     formData.phone.trim() &&
//     formData.address.trim() &&
//     formData.city.trim() &&
//     formData.salary &&
//     /^\d{11}$/.test(formData.phone) &&
//     Number(formData.age) >= 18 &&
//     Number(formData.age) <= 65;

//   const inputClasses = `
//     h-12 w-full rounded-xl border border-slate-200
//     bg-slate-50 px-4 text-sm text-slate-900
//     outline-none transition
//     placeholder:text-slate-400
//     hover:border-slate-300
//     focus:border-blue-500 focus:bg-white
//     focus:ring-4 focus:ring-blue-500/10
//     dark:border-slate-700 dark:bg-slate-950
//     dark:text-white dark:placeholder:text-slate-500
//     dark:hover:border-slate-600
//   `;

//   const labelClasses =
//     "mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200";

//   return (
//     <main className="min-h-screen bg-slate-100 px-4 py-12 dark:bg-slate-950 sm:px-6">
//       <section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-10">
//         {/* Header */}
//         <header className="mb-10">
//           <p className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
//             Loan application
//           </p>

//           <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
//             Apply for a Loan
//           </h1>

//           <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
//             Complete the form below with your personal and
//             employment information.
//           </p>
//         </header>

//         <form
//           onSubmit={handleSubmit}
//           noValidate
//           className="space-y-6"
//         >
//           <div className="grid gap-6 sm:grid-cols-2">
//             {/* Name */}
//             <div>
//               <label
//                 htmlFor="name"
//                 className={labelClasses}
//               >
//                 Full name
//               </label>

//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 autoComplete="name"
//                 className={inputClasses}
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label
//                 htmlFor="phone"
//                 className={labelClasses}
//               >
//                 Phone number
//               </label>

//               <input
//                 id="phone"
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 placeholder="11-digit phone number"
//                 autoComplete="tel"
//                 inputMode="numeric"
//                 maxLength={11}
//                 className={inputClasses}
//               />

//               <p className="mt-2 text-xs text-slate-400">
//                 {formData.phone.length}/11 digits
//               </p>
//             </div>
//           </div>

//           {/* Address */}
//           <div>
//             <label
//               htmlFor="address"
//               className={labelClasses}
//             >
//               Address
//             </label>

//             <input
//               id="address"
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Enter your address"
//               autoComplete="street-address"
//               className={inputClasses}
//             />
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2">
//             {/* City */}
//             <div>
//               <label
//                 htmlFor="city"
//                 className={labelClasses}
//               >
//                 City
//               </label>

//               <input
//                 id="city"
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter your city"
//                 autoComplete="address-level2"
//                 className={inputClasses}
//               />
//             </div>

//             {/* Age */}
//             <div>
//               <label
//                 htmlFor="age"
//                 className={labelClasses}
//               >
//                 Age
//               </label>

//               <input
//                 id="age"
//                 type="number"
//                 name="age"
//                 min="18"
//                 max="65"
//                 value={formData.age}
//                 onChange={handleChange}
//                 placeholder="Between 18 and 65"
//                 className={inputClasses}
//               />
//             </div>
//           </div>

//           {/* Salary */}
     
//       <div>
//         <label
//           htmlFor="salary"
//           className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
//         >
//           Monthly salary
//         </label>

//         <div className="relative">
//           <select
//             id="salary"
//             name="salary"
//             value={formData.salary}
//             onChange={handleChange}
//             className="
//               h-12 w-full appearance-none rounded-xl border
//               border-slate-300 bg-white px-4 pr-11
//               text-sm text-slate-900
//               outline-none transition
//               hover:border-slate-400
//               focus:border-blue-500
//               focus:ring-4 focus:ring-blue-500/10

//               dark:border-slate-700
//               dark:bg-slate-950
//               dark:text-white
//               dark:hover:border-slate-600
//               dark:[color-scheme:dark]
//             "
//           >
//             <option
//               value=""
//               disabled
//               className="bg-white text-slate-500 dark:bg-slate-950 dark:text-slate-400"
//             >
//               Select salary range
//             </option>

//             <option
//               value="less500"
//               className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white"
//             >
//               Less than $500
//             </option>

//             <option
//               value="1000-3000"
//               className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white"
//             >
//               Between $1,000 and $3,000
//             </option>

//             <option
//               value="7000+"
//               className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white"
//             >
//               More than $7,000
//             </option>
//           </select>

//           <ChevronDown
//             size={18}
//             className="
//               pointer-events-none absolute right-4 top-1/2
//               -translate-y-1/2 text-slate-400
//               dark:text-slate-500
//             "
//           />
//         </div>
//       </div>

//           {/* Employed */}
//           <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-blue-700 dark:hover:bg-blue-950/20">
//             <input
//               type="checkbox"
//               name="employed"
//               checked={formData.employed}
//               onChange={handleChange}
//               className="size-5 cursor-pointer rounded border-slate-300 accent-blue-600 dark:border-slate-600"
//             />

//             <div>
//               <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
//                 I am currently employed
//               </p>

//               <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//                 Select this option if you currently have a job.
//               </p>
//             </div>
//           </label>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={!isValid}
//             className={`
//               flex h-13 w-full items-center justify-center
//               rounded-xl px-6 text-sm font-semibold text-white
//               transition focus:outline-none focus:ring-4
//               ${
//                 isValid
//                   ? `
//                     bg-blue-600 shadow-lg shadow-blue-600/20
//                     hover:-translate-y-0.5 hover:bg-blue-700
//                     focus:ring-blue-500/20
//                   `
//                   : `
//                     cursor-not-allowed bg-slate-300
//                     text-slate-500 shadow-none
//                     dark:bg-slate-700 dark:text-slate-400
//                   `
//               }
//             `}
//           >
//             Submit Application
//           </button>
//         </form>
//       </section>

//       {/* Errors */}
//       {errors.length > 0 && (
//         <div
//           role="alert"
//           aria-live="polite"
//           className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm rounded-2xl border border-red-200 bg-white p-5 shadow-2xl dark:border-red-900/60 dark:bg-slate-900"
//         >
//           <p className="mb-3 font-semibold text-red-700 dark:text-red-400">
//             Please fix the following:
//           </p>

//           <ul className="space-y-1.5 text-sm text-red-600 dark:text-red-300">
//             {errors.map((error) => (
//               <li
//                 key={error}
//                 className="flex gap-2"
//               >
//                 <span aria-hidden="true">•</span>
//                 <span>{error}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Success */}
//       {success && (
//         <div
//           role="status"
//           aria-live="polite"
//           className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm rounded-2xl border border-emerald-200 bg-white p-5 text-sm font-medium text-emerald-700 shadow-2xl dark:border-emerald-900/60 dark:bg-slate-900 dark:text-emerald-400"
//         >
//           {success}
//         </div>
//       )}
//     </main>
//   );
// }