import Container from "../components/Common/Container";
import Pizza from "../components/Common/Pizza";
import Button from "../components/Common/Button/Button";

export default function CartPage() {
  return (
    <Container>
      <div className="grid w-full ">
        <div className="mt-3 flex grid-cols-4 items-center justify-center gap-24 bg-green-500 drop-shadow-sm">
          <h2></h2>
          <h2>Unit Price</h2>
          <h2>Quantity</h2>
          <h2>Total Price</h2>
          <h2>Actions</h2>
        </div>
      </div>
      <div className="w-full bg-red-500">
        <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        />
        <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        />
        <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        />
        <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        />
        <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        />
        <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        />
        <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        />
        <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        />
        <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        />
      </div>
      <div className="mt-4 w-full ">
        <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
          <Button type="primary">Checkout</Button>
        </h3>
      </div>
    </Container>
  );
}
