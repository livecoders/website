#include <iostream>
#include <string>
#include <stdlib.h>
using namespace std;
void set_content_type(string content_type) {
  cout << “Content-type: “ << content_type << “\r\n\r\n”;
}
void set_page_title(string title) {
  cout << “<title>” << title << “</title>\n”;
}
void h1_text(string text) {
  cout << text << “\n”;
}
int main() {
  set_content_type(“text/html”);
  // Output HTML boilerplate
  cout << “<!doctype html>\n”;
  cout << “<html lang=\”en\”>\n”;
  cout << “<head>\n”;
  set_page_title(“Hello, World!”);
  cout << “</head>\n”;
  cout << “<body>\n”;
  h1_text(“Hello, World!”);
  cout << “</body>\n”;
  cout << “</html>”;
  return 0;
}
