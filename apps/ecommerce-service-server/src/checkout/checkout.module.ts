import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CheckoutModuleBase } from "./base/checkout.module.base";
import { CheckoutService } from "./checkout.service";
import { CheckoutController } from "./checkout.controller";
import { CheckoutResolver } from "./checkout.resolver";

@Module({
  imports: [CheckoutModuleBase, forwardRef(() => AuthModule)],
  controllers: [CheckoutController],
  providers: [CheckoutService, CheckoutResolver],
  exports: [CheckoutService],
})
export class CheckoutModule {}
