import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardContent, Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ModuleItem } from "@/typesAndStatics/moduleManage";
import { Ellipsis } from "lucide-react";
import React from "react";

interface Props {
    module: ModuleItem;
    className?: string;
}

export default function ModuleBox(props: Props) {

    const { module, className = '' } = props;

    return (
        <Card className={className}>
            <CardHeader className='justify-between items-center'>
                <CardTitle>{module.name}</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Ellipsis/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {module.operates?.map(item => (
                            <DropdownMenuItem key={item.name} onClick={item.onClick}>
                                {item.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent>
                {module.component}
            </CardContent>
        </Card>
    )
}