CREATE TABLE "seats" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"is_booked" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now() NOT NULL
);
