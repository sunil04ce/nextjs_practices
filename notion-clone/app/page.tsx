import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button className="text-white bg-emerald-500" size="lg">
        Success
      </Button>
      <Button variant="purple" size="lg">
        Delete
      </Button>
    </div>
  );
}
