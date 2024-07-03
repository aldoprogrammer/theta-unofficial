import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { use } from "chai";
import { useState } from "react";

function NFTBar() {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 container mx-auto lg:py-20">
        <Card className="max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
              alt="NFT"
            />
          </CardHeader>
          <CardBody>
            <div variant="h4" color="blue-gray">
              Theta NFT
            </div>
            <div variant="h4" color="blue-gray">
              0x00000000000000
            </div>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              The NFT description
            </Typography>
          </CardBody>
          <div className="block p-3 bg-black rounded-xl text-white text-center shadow-lg shadow-blue-gray-200 cursor-pointer">
            Transfer
          </div>
        </Card>

        <Card className="max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
              alt="NFT"
            />
          </CardHeader>
          <CardBody>
            <div variant="h4" color="blue-gray">
              Theta NFT
            </div>
            <div variant="h4" color="blue-gray">
              0x00000000000000
            </div>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              The NFT description
            </Typography>
          </CardBody>
          <div className="block p-3 bg-black rounded-xl text-white text-center shadow-lg shadow-blue-gray-200 cursor-pointer">
            Transfer
          </div>
        </Card>
      </div>
    </>
  );
}
export default NFTBar;
