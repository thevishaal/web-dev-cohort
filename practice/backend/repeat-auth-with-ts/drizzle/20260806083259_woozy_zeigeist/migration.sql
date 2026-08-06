CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"first_name" varchar(50) NOT NULL,
	"last_name" varchar(45),
	"email" varchar(322) NOT NULL UNIQUE,
	"email_verified" boolean DEFAULT false,
	"verification_token" text,
	"password" varchar(66),
	"salt" text,
	"reset_token" text,
	"reset_token_expiry" timestamp,
	"refresh_token" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
