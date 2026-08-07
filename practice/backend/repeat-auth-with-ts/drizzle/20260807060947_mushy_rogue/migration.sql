CREATE TABLE "students" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar(79) NOT NULL,
	"email" varchar(322) NOT NULL UNIQUE,
	"age" varchar NOT NULL,
	"class" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
