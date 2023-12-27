import{r as n,j as e,N as f,L as k,Q as a}from"./index-NYLOCjoL.js";import{B as w}from"./btnLoader-nBJI4yfs.js";import{S as j}from"./Seo-1D0_vvZM.js";const C=()=>{const[c,u]=n.useState(!1),[b,x]=n.useState(!1),[o,l]=n.useState(1),[r,g]=n.useState({name:"",email:"",username:"",date_of_birth:"",password:"",re_password:""}),i=t=>{const{name:m,value:d}=t.target;g(s=>({...s,[m]:d}))},y=async t=>{t.preventDefault(),u(!0);const m="http://localhost:8000";if(r.date_of_birth===""||r.email===""||r.name===""||r.password===""||r.username===""){a.error("Please fill in all required fields.");return}try{const d=await fetch(`${m}/accounts/users/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.name,email:r.email,username:r.username,date_of_birth:r.date_of_birth,password:r.password,re_password:r.re_password})}),s=await d.json();d.status===201?(a.success("Registration successful. You can now login to your account."),g({name:"",email:"",username:"",date_of_birth:"",password:"",re_password:""}),l(1),x(!0)):(s.username&&a.error(s.username[0]),s.email&&a.error(s.email[0]),s.non_field_errors?a.error(s.non_field_errors[0]):a.error("Something went wrong. Please try again."))}catch{a.error("An error occurred. Please try again.")}finally{u(!1)}},p=()=>{if(o===1){if(r.name===""||r.email===""){a.error("Please fill in all required fields.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)){a.error("Please enter a valid email address.");return}}else if(o===2&&(r.username===""||r.date_of_birth==="")){a.error("Please fill in all the required fields.");return}l(t=>t+1)},h=()=>{l(t=>t-1)};return e.jsx(e.Fragment,{children:b?e.jsx(f,{to:"/accounts/login"}):e.jsx(j,{title:"Create account / Waanverse",description:"Create your Waanverse account today and unlock a universe of possibilities. Sign up to connect with a vibrant community, access exclusive content, and embark on a journey of discovery. Join Waanverse for a personalized and enriching online experience.",children:e.jsx("section",{className:"bg-gray-50 dark:bg-gray-900 py-8 px-4 min-h-screen",children:e.jsx("div",{className:"flex flex-col px-4 items-center justify-center py-8 mx-auto",children:e.jsx("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-md dark:bg-gray-800 dark:border-gray-700",children:e.jsxs("div",{className:"p-6 space-y-4 md:space-y-6",children:[e.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:o!==1?e.jsx("span",{onClick:h,className:"cursor-pointer",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"})})}):"Create and account"}),e.jsxs("form",{className:"space-y-4 md:space-y-6",method:"POST",onSubmit:y,children:[o===1&&e.jsxs("div",{className:"grid grid-cols-1 gap-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"name",children:"Name"}),e.jsx("input",{className:"bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",type:"text",id:"name",name:"name",required:!0,onChange:i,value:r.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"email",children:"Email Address"}),e.jsx("input",{className:"bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",type:"email",id:"email",name:"email",required:!0,onChange:i,value:r.email})]}),e.jsx("button",{onClick:p,className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Next"})]}),o===2&&e.jsxs("div",{className:"grid grid-cols-1 gap-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"username",children:"Username"}),e.jsx("input",{className:"bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",type:"text",id:"username",name:"username",required:!0,onChange:i,value:r.username})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"birth",children:"Date of Birth"}),e.jsx("input",{className:"bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",type:"date",id:"birth",name:"date_of_birth",required:!0,onChange:i,value:r.date_of_birth})]}),e.jsx("button",{onClick:p,className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Next"})]}),o===3&&e.jsxs("div",{className:"grid grid-cols-1 gap-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"password",children:"Password"}),e.jsx("input",{className:"bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",type:"password",id:"password",name:"password",required:!0,onChange:i,value:r.password})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"re_password",children:"Confirm password"}),e.jsx("input",{className:"bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",type:"password",id:"re_password",name:"re_password",required:!0,onChange:i,value:r.re_password})]}),e.jsx("button",{type:"submit",disabled:c,className:"w-full flex items-center justify-center text-white bg-primary-600 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:c?e.jsx(w,{sm:!0,fill:"fill-white"}):"Create an account"})]}),e.jsxs("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Already have an account?"," ",e.jsx(k,{to:"/accounts/login",className:"font-medium text-primary-600 hover:underline dark:text-primary-500",children:"Login here"})]})]})]})})})})})})};export{C as default};
