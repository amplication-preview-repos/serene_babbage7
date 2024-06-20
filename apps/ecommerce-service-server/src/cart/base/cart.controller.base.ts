/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CartService } from "../cart.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CartCreateInput } from "./CartCreateInput";
import { Cart } from "./Cart";
import { CartFindManyArgs } from "./CartFindManyArgs";
import { CartWhereUniqueInput } from "./CartWhereUniqueInput";
import { CartUpdateInput } from "./CartUpdateInput";
import { CheckoutFindManyArgs } from "../../checkout/base/CheckoutFindManyArgs";
import { Checkout } from "../../checkout/base/Checkout";
import { CheckoutWhereUniqueInput } from "../../checkout/base/CheckoutWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CartControllerBase {
  constructor(
    protected readonly service: CartService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cart })
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCart(@common.Body() data: CartCreateInput): Promise<Cart> {
    return await this.service.createCart({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Cart] })
  @ApiNestedQuery(CartFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async carts(@common.Req() request: Request): Promise<Cart[]> {
    const args = plainToClass(CartFindManyArgs, request.query);
    return this.service.carts({
      ...args,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cart(
    @common.Param() params: CartWhereUniqueInput
  ): Promise<Cart | null> {
    const result = await this.service.cart({
      where: params,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCart(
    @common.Param() params: CartWhereUniqueInput,
    @common.Body() data: CartUpdateInput
  ): Promise<Cart | null> {
    try {
      return await this.service.updateCart({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,

          product: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCart(
    @common.Param() params: CartWhereUniqueInput
  ): Promise<Cart | null> {
    try {
      return await this.service.deleteCart({
        where: params,
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,

          product: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/checkouts")
  @ApiNestedQuery(CheckoutFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Checkout",
    action: "read",
    possession: "any",
  })
  async findCheckouts(
    @common.Req() request: Request,
    @common.Param() params: CartWhereUniqueInput
  ): Promise<Checkout[]> {
    const query = plainToClass(CheckoutFindManyArgs, request.query);
    const results = await this.service.findCheckouts(params.id, {
      ...query,
      select: {
        cart: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        paymentStatus: true,
        totalAmount: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/checkouts")
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "update",
    possession: "any",
  })
  async connectCheckouts(
    @common.Param() params: CartWhereUniqueInput,
    @common.Body() body: CheckoutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkouts: {
        connect: body,
      },
    };
    await this.service.updateCart({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/checkouts")
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "update",
    possession: "any",
  })
  async updateCheckouts(
    @common.Param() params: CartWhereUniqueInput,
    @common.Body() body: CheckoutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkouts: {
        set: body,
      },
    };
    await this.service.updateCart({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/checkouts")
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "update",
    possession: "any",
  })
  async disconnectCheckouts(
    @common.Param() params: CartWhereUniqueInput,
    @common.Body() body: CheckoutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkouts: {
        disconnect: body,
      },
    };
    await this.service.updateCart({
      where: params,
      data,
      select: { id: true },
    });
  }
}
