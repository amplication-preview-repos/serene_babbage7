import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CheckoutService } from "./checkout.service";
import { CheckoutControllerBase } from "./base/checkout.controller.base";

@swagger.ApiTags("checkouts")
@common.Controller("checkouts")
export class CheckoutController extends CheckoutControllerBase {
  constructor(
    protected readonly service: CheckoutService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
