"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const instruments = [
  { symbol: "AAPL", name: "Apple Inc.", price: 150 },
  { symbol: "REIT-IND", name: "Indian REIT", price: 25 },
  { symbol: "ETF-US", name: "US ETF", price: 200 },
  { symbol: "BOND-IND", name: "Indian Government Bond", price: 100 },
];

export function PerpetualTrading() {
  const [selected, setSelected] = useState(instruments[0].symbol);
  const [quantity, setQuantity] = useState(1);
  const [leverage, setLeverage] = useState(1);

  const handlePlaceOrder = () => {
    // Placeholder for order placement logic
    alert(
      `Placing order: ${quantity} units of ${selected} at ${leverage}x leverage`
    );
  };

  const selectedInstrument = instruments.find(
    (inst) => inst.symbol === selected
  );

  return (
    <Card className="max-w-4xl mx-auto my-8 p-6">
      <CardHeader>
        <CardTitle>Perpetual Trading Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Available Instruments</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {instruments.map((inst) => (
                  <TableRow key={inst.symbol}>
                    <TableCell>{inst.symbol}</TableCell>
                    <TableCell>{inst.name}</TableCell>
                    <TableCell>{inst.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Place Order</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Instrument</label>
                <select
                  className="w-full border rounded p-2"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  {instruments.map((inst) => (
                    <option key={inst.symbol} value={inst.symbol}>
                      {inst.symbol} - {inst.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1">Quantity</label>
                <Input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block mb-1">Leverage (x)</label>
                <Input
                  type="number"
                  min={1}
                  value={leverage}
                  onChange={(e) => setLeverage(Number(e.target.value))}
                />
              </div>
              <Button onClick={handlePlaceOrder} className="w-full">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Current price of {selected}: {selectedInstrument?.price}
        </p>
      </CardFooter>
    </Card>
  );
}
