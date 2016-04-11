package Log;
use strict;
use warnings;

sub new {
    my ($class, %args) = @_;
    return bless \%args, $class;
}

sub protocol {
  my $self = shift;
  my @req = split /\s+/, $self->{req};
  return $req[2];
}

sub method {
  my $self = shift;
  my @req = split /\s+/, $self->{req};
  return $req[0];
}

sub path {
  my $self = shift;
  my @req = split /\s+/, $self->{req};
  return $req[1];
}

sub uri {
  my $self = shift;
  my @req = split /\s+/, $self->{req};#reqを分割
  $_ = '';
  $_ =~ s//\L$req[2]/gi;#小文字変換
  my @detail_protocol = split /\//, $_;#/で分割
  my @values = ($detail_protocol[0], '://', $self->{host}, $req[1]);
  return join "", @values;
}
use HTTP::Date;
sub time {
  my $self = shift;
  #my $time = HTTP::Date::time2iso($self->{epoch});
  my $time = time2str($self->{epoch});
  
  $time =~ s/\ /T/;
  return $time;
}

1;
