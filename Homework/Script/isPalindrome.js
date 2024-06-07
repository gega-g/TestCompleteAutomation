function isPalindrome(str)
{
  for (var i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length -i-1]) {
            return Log.Error("This word isn't a palindrome");
        }
    }
    return Log.Message("It is a palindrome");
}
function check()
{
  isPalindrome("abba")
}