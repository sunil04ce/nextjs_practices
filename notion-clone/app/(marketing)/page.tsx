import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div>
        <Button className="text-white bg-emerald-500" size="lg">
          Success
        </Button>
      </div>
      <div>
        <Button variant="purple" size="lg">
          Delete
        </Button>
      </div>
    </div>
  );
}
