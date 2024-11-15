import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Join thousands of satisfied customers and take your business to
              the next level.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex gap-4 w-full justify-center md:space-x-4 items-center">
              Redes sociais
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="submit">Whatsapp</Button>
              </a>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              By subscribing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
