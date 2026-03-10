import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const productItems = [
  {
    id: 1,
    quantity: 329,
    image: "/figmaAssets/rectangle-17.svg",
    addIcon: "/figmaAssets/add-icon.svg",
  },
  {
    id: 2,
    quantity: 329,
    image: "/figmaAssets/rectangle-17.svg",
    addIcon: "/figmaAssets/frame-1.svg",
  },
  {
    id: 3,
    quantity: 329,
    image: "/figmaAssets/rectangle-17.svg",
    addIcon: "/figmaAssets/plus-math-3.png",
  },
  {
    id: 4,
    quantity: 329,
    image: "/figmaAssets/rectangle-17.svg",
    addIcon: "/figmaAssets/add-icon.svg",
  },
  {
    id: 5,
    quantity: 329,
    image: "/figmaAssets/rectangle-17.svg",
    addIcon: "/figmaAssets/frame-1.svg",
  },
  {
    id: 6,
    quantity: 329,
    image: "/figmaAssets/rectangle-17.svg",
    addIcon: "/figmaAssets/plus-math-3.png",
  },
  {
    id: 7,
    quantity: 329,
    image: "/figmaAssets/rectangle-17.svg",
    addIcon: "/figmaAssets/add-icon.svg",
  },
  {
    id: 8,
    quantity: 329,
    image: "/figmaAssets/rectangle-17.svg",
    addIcon: "/figmaAssets/frame-1.svg",
  },
  {
    id: 9,
    quantity: 329,
    image: "/figmaAssets/rectangle-17.svg",
    addIcon: "/figmaAssets/plus-math-3.png",
  },
];

const cartItems = [
  {
    id: 1,
    productName: "Product Name",
    price: "Price",
    quantity: "Quantity",
    total: "Total",
    image: "/figmaAssets/rectangle-19.svg",
  },
  {
    id: 2,
    productName: "Product Name",
    price: "Price",
    quantity: "Quantity",
    total: "Total",
    image: "/figmaAssets/rectangle-19.svg",
  },
  {
    id: 3,
    productName: "Product Name",
    price: "Price",
    quantity: "Quantity",
    total: "Total",
    image: "/figmaAssets/rectangle-19.svg",
  },
];

export const MainCashierUi = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-[#e26b17] w-full min-h-screen relative p-8">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 [background:radial-gradient(50%_50%_at_50%_50%,#ffa54b_15%,#e26b17_100%)] z-0" />

      {/* Red Circle */}
      <div className="relative z-10 w-[110px] h-[110px] bg-[#da2828] rounded-full mb-8 shadow-lg" />

      {/* Top Header Section */}
      <div className="relative z-10 flex justify-end mb-12">
        <div className="w-[65%] h-[90px] bg-[#ea7719] rounded-l-[25px] shadow-2xl flex items-center pl-10">
          <h1 className="text-white text-[52px] font-bold tracking-wider">
            TOTAL
          </h1>
        </div>
      </div>

      <div className="relative z-10 flex gap-8 max-w-[1400px] mx-auto -mt-16">
        {/* Left Side: Product Grid */}
        <div className="flex-[2] grid grid-cols-3 gap-6">
          {productItems.map((item) => (
            <Card
              key={item.id}
              className="bg-[#ff8d2a] rounded-[20px] shadow-lg border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="h-[140px] bg-[#d9d9d9]" />
                <div className="p-3 flex items-center gap-3">
                  <div className="flex-1 h-10 bg-[#4ade80] rounded-full flex items-center px-2 gap-2 shadow-inner">
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#4ade80] font-bold">
                      +
                    </div>
                  </div>
                  <div className="text-black font-semibold text-sm whitespace-nowrap">
                    QTY: {item.quantity}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Side: Order Summary */}
        <div className="flex-1">
          <Card className="bg-[#f49038]/80 rounded-[20px] shadow-2xl border-0 p-5 h-fit backdrop-blur-sm">
            <CardContent className="p-0 flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#ffd666] rounded-[15px] p-4 flex gap-4 shadow-md"
                >
                  <div className="w-[120px] h-[100px] bg-[#d9d9d9] rounded-lg shrink-0" />
                  <div className="flex flex-col justify-between text-[#4a2e12] font-medium text-sm py-1">
                    <div>Product Name</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#ea7719]/90 backdrop-blur-md flex justify-end items-center px-12 gap-6 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <Button className="bg-[#fa8d39] hover:bg-[#ff9d50] text-black font-bold px-8 py-4 rounded-xl shadow-lg border-b-4 border-[#c56112] transition-all active:border-b-0 active:translate-y-1">
          View Stock
        </Button>
        <Button className="bg-[#fa8d39] hover:bg-[#ff9d50] text-black font-bold px-8 py-4 rounded-xl shadow-lg border-b-4 border-[#c56112] transition-all active:border-b-0 active:translate-y-1 text-center leading-tight">
          View receiving<br/>Stock
        </Button>
      </div>
    </div>
  );
};
