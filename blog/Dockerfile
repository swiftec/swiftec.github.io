FROM ruby

RUN gem install bundler

WORKDIR /blog

COPY Gemfile Gemfile.lock ./

RUN bundle install


