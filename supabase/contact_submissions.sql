-- Create the contact_submissions table
create table if not exists public.contact_submissions (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    email text not null,
    phone text not null,
    city text not null,
    country text,
    message text not null
);

-- Enable Row Level Security
alter table public.contact_submissions enable row level security;

-- Allow public to insert submissions (Anonymously)
create policy "Allow public to insert contact submissions"
on public.contact_submissions
for insert
with check (true);

-- Note: We typically don't allow public SELECT/UPDATE/DELETE for security.
