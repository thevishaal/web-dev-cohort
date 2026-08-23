CREATE TYPE "token_name" AS ENUM('refresh', 'access', 'reset', 'verification');--> statement-breakpoint
CREATE TABLE "tokens" (
	"id" serial PRIMARY KEY,
	"token_name" "token_name" NOT NULL,
	"user_id" uuid NOT NULL,
	"used" boolean DEFAULT false NOT NULL,
	"token" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id");