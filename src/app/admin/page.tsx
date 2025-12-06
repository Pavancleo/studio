import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { contacts } from "@/lib/data";

export default function AdminDashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Contacts</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-black/20 shadow-sm p-4 bg-background/30 backdrop-blur-2xl">
        <Card className="w-full bg-transparent border-black/20 text-foreground">
          <CardHeader>
            <CardTitle>Contact Messages</CardTitle>
            <CardDescription className="text-muted-foreground">
              Manage messages from your portfolio visitors.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-black/20">
                  <TableHead className="text-foreground">Customer</TableHead>
                  <TableHead className="hidden md:table-cell text-foreground">
                    Message
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-foreground">
                    Status
                  </TableHead>
                  <TableHead className="text-right text-foreground">Received</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map(contact => (
                  <TableRow key={contact.id} className="border-black/20">
                    <TableCell>
                      <div className="font-medium">{contact.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {contact.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell truncate max-w-xs text-muted-foreground">
                      {contact.message}
                    </TableCell>
                     <TableCell className="hidden md:table-cell">
                      <Badge className="text-xs" variant="outline">
                        New
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">{contact.received}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
