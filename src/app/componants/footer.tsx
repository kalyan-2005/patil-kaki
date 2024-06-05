export default function Footer() {
  return (
    <div className="bg-primary text-gray-300 px-32 pb-32">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 w-2/5">
          <div className="flex gap-4 items-center">
            <h1>ICON</h1>
            <h1 className="text-5xl font-bold text-white">Crest</h1>
          </div>
          <p>
            Crest is an AI-powered supply chain software that provides companies
            tools for demand forecasting, inventory planning and more. This
            helps them have the right amount of stock, optimise space and fulfil
            every order.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Explore</h1>
          <h1>Product</h1>
          <h1>Pricing</h1>
          <h1>Customer Stories</h1>
          <h1>Career</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Learn</h1>
          <h1>About us</h1>
          <h1>Blog</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Contact Crest</h1>
          <h1>sales@getcrest.ai</h1>
          <div>
            <h1>Registered Office:</h1>
            <h1>1507, Incubex, 11th cross road,</h1>
            <h1>19th Main Road, Bengaluru,</h1>
            <h1>India. 560102</h1>
          </div>
          <div>
            <h1>Corporate Office:</h1>
            <h1>291, All Time Space, 4th Floor,</h1>
            <h1>15th A Cross, Sector - 6,</h1>
            <h1>HSR Layout, Bengaluru,</h1>
            <h1>India. 560102</h1>
          </div>
          <div className="flex gap-2">
            <h1>ICON</h1>
            <h1>ICON</h1>
            <h1>ICON</h1>
            <h1>ICON</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="flex gap-4 py-4">
            <h1>Copyright 2024 Crest</h1>
            <h1>Terms of Service</h1>
            <h1>Privacy Policy</h1>
          </div>
          <div>
            <h1>Conifer Innovations Private Limited</h1>
            <h1>CIN: U72900KA2022PTC163144</h1>
          </div>
        </div>
        <div>
          <h1>Arrow</h1>
        </div>
      </div>
    </div>
  );
}
