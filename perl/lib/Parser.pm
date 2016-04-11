package Parser;
use strict;
use warnings;

sub new {
    my ($class, %args) = @_;
    return bless \%args, $class;
}

sub parse {
  my $class = @_;
  my $self = shift;
  open my $fh, '<', $self->{filename} or die $!;
  my @parsed_lines;
  my @temp;
  my $i = 0;
  while(my $lines = <$fh>){
    $lines =~ s/:\/\//Z\/\//;
    $lines =~ s/\n//;
    my %hash = split(/[:\t]/, $lines);
    $hash{referer} =~ s/Z\/\//:\/\//;
    $parsed_lines[$i] = bless \%hash, 'Log';
    $i++;
  }
  return \@parsed_lines;
}

1;
