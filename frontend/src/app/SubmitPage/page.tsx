'use client';
import SubmitForm from '../components/SubmitForm';

const SubmitPage: NextPage = () => {
  const handleSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Submit a Publication</h1>
      <SubmitForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SubmitPage;