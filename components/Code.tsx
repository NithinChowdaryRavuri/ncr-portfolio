import { Card } from "./ui/card";
import Image from "next/image";
import code from "@/public/code.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define a type for the data structure
type Value = {
  Language: string;
  LinesOfCode: number;
};

async function fetchValues() {
  const languages = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SQL",
    "Total",
  ];

  const fetches = languages.map(async (language) => {
    try {
      const response = await fetch(
        `https://nithin-github-stats.netlify.app/api/${language}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data for ${language}: ${response.statusText}`
        );
      }
      const data = await response.json();
      return { Language: language, LinesOfCode: data };
    } catch (error) {
      return { Language: language, LinesOfCode: 0 }; // Default value in case of error
    }
  });
  const results = await Promise.all(fetches);
  return results;
}

export async function Code() {
  const values: Value[] = await fetchValues();

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <Card className="col-span-1 lg:col-span-2 border-none bg-gray-100 p-8">
        <h1 className="text-4xl lg:text-5xl">Lines of Code</h1>
        <p className="mt-4 text-muted-foreground lg:text-lg">
          Number of lines of code != Expertise, but number of lines of code ==
          Repetition == Solidified Fundamentals == Hard Work.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Language</TableHead>
              <TableHead className="text-right">LinesOfCode</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {values.map((value) => (
              <TableRow key={value.Language}>
                <TableCell className="font-medium">{value.Language}</TableCell>
                <TableCell className="text-right">
                  {value.LinesOfCode}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="mt-2 text-muted-foreground lg:text-lg">
          Note: The above values are fetched from a project I built to compute
          and store those values, to fetch in real time.
        </p>
      </Card>

      <div className="col-span-1 flex items-center">
        <Image
          src={code}
          alt="Coding"
          className="h-[500px] object-cover rounded-lg w-full"
        />
      </div>
    </div>
  );
}
