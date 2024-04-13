import db from "@/lib/db";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dbProvinces, getValueById } from "@/lib/constants";

export const ProvidersList = async () => {
  const data = await db.serviceProvider.findMany();

  const getProvinceName = (provinceId: number) => {
    const province = getValueById(dbProvinces, provinceId);
    return province ? province.name : "";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Website</TableHead>
          <TableHead>Province</TableHead>
          <TableHead>Area</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((record) => (
          <TableRow key={record.id}>
            <TableCell className="font-medium">{record.name}</TableCell>
            <TableCell>{record.phone}</TableCell>
            <TableCell>{record.email}</TableCell>
            <TableCell>{record.website}</TableCell>
            <TableCell>{getProvinceName(record.provinceId)}</TableCell>
            <TableCell>{record.location1}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
