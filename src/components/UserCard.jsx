export default function UserCard({ username, lastname, img }) {
  return (
    <div className="text-white border-slate-900 p-8 rounded-2xl bg-linear-to-bl from-slate-950 to-violet-950">
      <div className="flex">
        <img src={img} alt={username} />
        <p className="ms-4">
          {username} <br />
          {lastname}
        </p>
      </div>
      <hr className="text-white mt-6 w-50 mx-auto brightness-50 mb-5" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's.
      </p>
    </div>
  );
}
