import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";

export default function LoanApplication() {
  const [formData, setFormData] = useState({
    loanAmount: "",
    loanType: "",
    purpose: "",
    documents: {
      panCard: null,
      aadharCard: null,
      bankStatement: null,
      assetDocuments: null,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleFileChange = (documentType, e) => {
    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [documentType]: e.target.files[0],
      },
    });
  };

  return (
    <div className="min-h-screen  bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ">
      <div className="relative py-3 md:px-2 w-full md:w-1/3 sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-4 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
                  Loan Application Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Loan Amount
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Loan Amount"
                      value={formData.loanAmount}
                      onChange={(e) =>
                        setFormData({ ...formData, loanAmount: e.target.value })
                      }
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2 py-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Loan Type
                    </label>
                    <select
                      value={formData.loanType}
                      onChange={(e) =>
                        setFormData({ ...formData, loanType: e.target.value })
                      }
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2 py-1"
                    >
                      <option value="">Select loan type</option>
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="business">Business Loan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Purpose
                    </label>
                    <textarea
                      value={formData.purpose}
                      placeholder="Purpose of Loan"
                      onChange={(e) =>
                        setFormData({ ...formData, purpose: e.target.value })
                      }
                      rows={3}
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2 py-1"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Required Documents
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        PAN Card
                      </label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange("panCard", e)}
                        className="mt-1 block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-700
                          hover:file:bg-blue-100 border border-gray-300 px-2 py-2 rounded-md"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Aadhar Card
                      </label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange("aadharCard", e)}
                        className="mt-1 block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-700
                          hover:file:bg-blue-100 border border-gray-300 px-2 py-2 rounded-md"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Bank Statement
                      </label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange("bankStatement", e)}
                        className="mt-1 block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-700
                          hover:file:bg-blue-100 border border-gray-300 px-2 py-2 rounded-md"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Asset Documents
                      </label>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleFileChange("assetDocuments", e)}
                        className="mt-1 block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-700
                          hover:file:bg-blue-100 border border-gray-300 px-2 py-2 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="pt-5">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function LoanApplication() {
//   const [formData, setFormData] = useState({
//     loanAmount: '',
//     loanType: '',
//     purpose: '',
//     documents: {
//       panCard: null,
//       aadharCard: null,
//       bankStatement: null,
//       assetDocuments: [],
//     },
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Validation function
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.loanAmount) newErrors.loanAmount = 'Loan Amount is required';
//     if (!formData.loanType) newErrors.loanType = 'Loan Type is required';
//     if (!formData.purpose) newErrors.purpose = 'Purpose is required';
//     if (!formData.documents.panCard) newErrors.panCard = 'PAN Card is required';
//     if (!formData.documents.aadharCard) newErrors.aadharCard = 'Aadhar Card is required';
//     if (!formData.documents.bankStatement) newErrors.bankStatement = 'Bank Statement is required';
//     return newErrors;
//   };

//   // Handle file uploads
//   const handleFileUpload = async (file, folder) => {
//     const fileRef = ref(storage, `${folder}/${file.name}`);
//     await uploadBytes(fileRef, file);
//     return await getDownloadURL(fileRef);
//   };

//   // Handle file input changes
//   const handleFileChange = (documentType, e) => {
//     const files = e.target.files;
//     setFormData((prevState) => ({
//       ...prevState,
//       documents: {
//         ...prevState.documents,
//         [documentType]: documentType === 'assetDocuments' ? [...files] : files[0],
//       },
//     }));
//   };

//   // Form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       setIsSubmitting(true);
//        console.log("Docs" , formData.documents)
//       try {
//         // Upload documents to Firebase Storage
//         const uploadPromises = [];
//         const fileUrls = {};

//         for (const [key, file] of Object.entries(formData.documents)) {
//           if (key === 'assetDocuments' && file.length > 0) {
//             fileUrls[key] = [];
//             for (const assetFile of file) {
//               const url = await handleFileUpload(assetFile, 'assets');
//               fileUrls[key].push(url);
//             }
//           } else if (file) {
//             fileUrls[key] = await handleFileUpload(file, key);
//           }
//         }

//         // Prepare Firestore data
//         const firestoreData = {
//           loanAmount: formData.loanAmount,
//           loanType: formData.loanType,
//           purpose: formData.purpose,
//           documents: fileUrls,
//           createdAt: new Date().toISOString(),
//         };

//         console.log("firestoreData", firestoreData)

//         // Save data to Firestore
//         const docRef = doc(db, 'loanApplications', `loan_${Date.now()}`);
//         await setDoc(docRef, firestoreData);

//         alert('Loan application submitted successfully!');
//         setFormData({
//           loanAmount: '',
//           loanType: '',
//           purpose: '',
//           documents: {
//             panCard: null,
//             aadharCard: null,
//             bankStatement: null,
//             assetDocuments: [],
//           },
//         });
//       } catch (error) {
//         console.error('Error submitting loan application:', error);
//         alert('There was an error submitting your application. Please try again.');
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 px-2 w-full md:w-1/3 sm:mx-auto border border-black">
//         <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
//           <div className="max-w-md mx-auto">
//             <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Loan Application Form</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Loan Amount</label>
//                 <input
//                   type="number"
//                   placeholder="Enter Loan Amount"
//                   value={formData.loanAmount}
//                   onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
//                   className="mt-1 block w-full rounded-md border shadow-sm px-2 py-1"
//                 />
//                 {errors.loanAmount && <p className="text-red-500 text-sm">{errors.loanAmount}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Loan Type</label>
//                 <select
//                   value={formData.loanType}
//                   onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
//                   className="mt-1 block w-full rounded-md border shadow-sm px-2 py-1"
//                 >
//                   <option value="">Select loan type</option>
//                   <option value="personal">Personal Loan</option>
//                   <option value="home">Home Loan</option>
//                   <option value="business">Business Loan</option>
//                 </select>
//                 {errors.loanType && <p className="text-red-500 text-sm">{errors.loanType}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Purpose</label>
//                 <textarea
//                   value={formData.purpose}
//                   placeholder="Purpose of Loan"
//                   onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
//                   rows={3}
//                   className="mt-1 block w-full rounded-md border shadow-sm px-2 py-1"
//                 />
//                 {errors.purpose && <p className="text-red-500 text-sm">{errors.purpose}</p>}
//               </div>

//               {/* Document Uploads */}
//               {['panCard', 'aadharCard', 'bankStatement', 'assetDocuments'].map((doc) => (
//                 <div key={doc}>
//                   <label className="block text-sm font-medium text-gray-700 capitalize">{doc.replace(/([A-Z])/g, ' $1')}</label>
//                   <input
//                     type="file"
//                     multiple={doc === 'assetDocuments'}
//                     onChange={(e) => handleFileChange(doc, e)}
//                     className="mt-1 block w-full text-sm border px-2 py-1"
//                   />
//                   {errors[doc] && <p className="text-red-500 text-sm">{errors[doc]}</p>}
//                 </div>
//               ))}

//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Submitting...' : 'Submit Application'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
