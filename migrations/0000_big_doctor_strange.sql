CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"clerkId" text NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"photo" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "wallet" (
	"chainuid" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"user_id" text NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wallet" ADD CONSTRAINT "wallet_name_users_name_fk" FOREIGN KEY ("name") REFERENCES "public"."users"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wallet" ADD CONSTRAINT "wallet_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wallet" ADD CONSTRAINT "wallet_email_users_email_fk" FOREIGN KEY ("email") REFERENCES "public"."users"("email") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
